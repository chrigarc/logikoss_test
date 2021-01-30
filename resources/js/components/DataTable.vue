<template>
    <div>
        <template v-if="hasFilters || hasFilters === ''">
            <form @submit.prevent="getData" @reset="cleanForm" ref="form">
                <div class="columns is-multiline">
                    <template v-if="dateFilter || dateFilter === ''">
                        <div class="column is-6">
                            <b-field label="Fecha inicio">
                                <b-datepicker v-model="params.from_date" placeholder="Desde"icon="calendar" :maxDate="maxDate">
                                </b-datepicker>
                            </b-field>
                        </div>
                        <div class="column is-6">
                            <b-field label="Fecha fin">
                                <b-datepicker v-model="params.to_date" placeholder="Hasta" icon="calendar" :minDate="minDate">
                                </b-datepicker>
                            </b-field>
                        </div>
                    </template>
                    <template v-if="searchFields.length">
                        <div class="column is-4" v-for="field in searchFields">
                            <b-field :label="field.label">
                                <b-select v-model="params[field.field]" v-if="field.type == 'select'" :placeholder="field.holder">
                                    <option
                                            v-for="option in field.data"
                                            :value="option[field.val]"
                                            :key="option.id">
                                        {{ option[field.option] }}
                                    </option>
                                </b-select>
                                <b-input v-model="params[field.field]" v-else :type="field.type" :placeholder="field.holder"></b-input>
                            </b-field>
                        </div>
                    </template>

                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" class="button is-primary">
                    <span class="icon">
                      <i class="fa fa-search"></i>
                    </span>
                            <span>Buscar</span>
                        </button>
                    </div>
                    <div class="control">
                        <button type="reset" class="button is-danger">
                            <span>Limpiar</span>
                            <span class="icon is-small">
                        <i class="fa fa-times"></i>
                    </span>
                        </button>
                    </div>
                </div>
            </form>
            <br>
        </template>
        <b-field grouped group-multiline>
            <b-select v-model="params.perPage" @input="getData">
                <option value="5">5 por página</option>
                <option value="10">10 por página</option>
                <option value="20">20 por página</option>
                <option value="50">50 por página</option>
                <option value="100">100 por página</option>
            </b-select>
            <p class="control">
                <router-link :to="{name: 'Create' + model}" class="button is-success" v-if="create || create === ''">
                    {{ createLabel }}
                </router-link>
            </p>
        </b-field>

        <b-table :data="data" :checked-rows.sync="checkedRows" :checkable="checkable || checkable === ''" paginated :loading="isLoading" :total="total" :backend-pagination="true" :backend-sorting="true" :current-page="params.page" :per-page="params.perPage" :mobile-cards="mobile" @page-change="pageChange" @sort="sortData" :detailed="detailed" :detail-key="primaryKey">

            <template slot-scope="props">
                <b-table-column label="Acciones" v-if="hasActions || hasActions === ''">
                    <div class="field is-grouped">
                        <p class="control" v-for="action in actions">
                            <b-tooltip :label="action.title" position="is-left" animated>
                                <a class="button is-small" :class="action.color" @click="$emit(action.event, props.row)">
                                <span class="icon">
                                    <i :class="action.icon"></i>
                                </span>
                                </a>
                            </b-tooltip>
                        </p>
                    </div>
                </b-table-column>
                <b-table-column label="Acciones" v-if="actionButtons || actionButtons === ''">
                    <action-buttons :row="props.row" :primary-key="primaryKey" show edit delete @deleteData="getData" :model="model" :url="url" :no-modal="noModal">
                        <template slot-scope="item">
                            <slot name="show-slot" :item="props.row"></slot>
                        </template>
                    </action-buttons>
                </b-table-column>
                <b-table-column v-for="(field, index) in fields" :label="field.label" :key="index + 1" :sortable="field.sort" :field="field.field" :width="field.width" :numeric="field.numeric" :centered="field.centered">
                    <span v-if="field.hasFilter && !field.image" v-html="$options.filters[field.filter](fieldVal(props.row, field.field), field.filterAdd)">
                    </span>
                    <template v-else-if="field.image">
                        <a data-fancybox :href="props.row[field.field]" v-if="props.row[field.field]">
                            <img :src="props.row[field.field]" :alt="props.row[field.field]" style="height: 30px">
                        </a>
                        <span v-else>Sin imagen</span>
                    </template>
                    <span v-html="fieldVal(props.row, field.field)" v-else>
                    </span>
                </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
                <slot name="expanded" :row="props.row"></slot>
            </template>

            <template slot="bottom-left" v-if="checkable || checkable === ''">
                <b>Total seleccionados</b>: {{ checkedRows.length }}
            </template>
            <section class="hero is-danger is-bold" slot="empty" v-if="ready">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <h1 class="title">
                            Sin datos
                        </h1>
                        <h2 class="subtitle">
                            Aún no hay nada que mostrar
                        </h2>
                    </div>
                </div>
            </section>

        </b-table>
        <template v-if="checkable || checkable === ''">
            <button class="button field is-danger" @click="checkedRows = []"
                    :disabled="!checkedRows.length">
                <b-icon icon="close"></b-icon>
                <span>Eliminar seleccionados</span>
            </button>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [],
                checkedRows: [],
                isLoading: false,
                params: {
                    from_date: null,
                    to_date: null,
                    perPage: 10,
                    page: 1,
                    type: ''
                },
                minDate: null,
                maxDate: null,
                total: 0,
                ready: false,
                load: false
            }
        },
        props: {
            url: String,
            checkable: {},
            method: {
                type: String,
                default: 'get'
            },
            fields: Array,
            searchFields: {
                type: Array,
                default: () => []
            },
            dateFilter: {},
            mobile: {
                default: true,
                type: Boolean
            },
            actionButtons: String || Boolean,
            noModal: String || Boolean,
            actions: {},
            detailed: {},
            hasFilters: {},
            extraParams: {
                default: () => []
            },
            create: {},
            createLabel: {
                type: String,
                default: 'Nuevo Registro'
            },
            model: {},
            hasActions: {},
            title: {
                default: 'Reporte'
            },
            primaryKey: {
                default: 'id'
            }

        },
        watch: {
            'params.fromDate': date => {
                this.minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
            },
            'params.toDate': date => {
                this.maxDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
            }
        },
        mounted() {
            this.prepareComponent()
        },
        methods: {
            prepareComponent() {
                for ( var item in this.extraParams) {
                    this.params[item] = this.extraParams[item];
                }
                this.getData();
            },
            pdfUrl() {
                this.load = true
                let params = {
                    field: this.fields,
                    params: this.params,
                    model: this.model,
                }
                this.$http.get('pdf', {
                    params: params
                }).then(response => {
                    window.open(response.data);
                    this.load = false
                }).catch(response => {
                    this.load = false
                })
            },
            pageChange(page) {
                this.params.page = page
                this.getData()
            },
            sortData(field, order) {
                this.params.field = field
                this.params.sorting = order
                this.getData()
            },
            getData() {
                this.isLoading = true;
                this.$http[this.method](this.url, {
                    params: this.params
                }).then(({data}) => {
                    this.ready = true;
                    this.isLoading = false;
                    this.data = data.data || [];
                    this.total = data.total || 0;
                }, error => {
                    this.isLoading = false
                    this.$toast.open({
                        duration: 5000,
                        message: error.response.data.message,
                        position: 'is-bottom',
                        type: 'is-danger'
                    })
                })
            },
            fieldVal(val, field) {
                let index = field.split('.');
                let current = val;
                if (! current[index[0]]) {
                    return null
                }
                while(index.length) {
                    if(typeof current !== 'object') return undefined;
                    current = current[index.shift()];
                }
                return current;
            },
            cleanForm() {

                this.params.from_date = this.params.to_date = null
                this.searchFields.forEach(el => {
                    this.params[el.field] = null
                })
                this.getData()
            }
        }
    }
</script>








