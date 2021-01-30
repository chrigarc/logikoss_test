<template>
    <div>
        <section>
            <div class="control" >
                <a class="button is-success" :href="`${url}/create`">
                    Nuevo Usuario
                </a>
            </div>
            <b-field grouped group-multiline>
                <b-select v-model="perPage" @input="getData">
                    <option value="5">5 por página</option>
                    <option value="10">10 por página</option>
                    <option value="15">15 por página</option>
                    <option value="20">20 por página</option>
                </b-select>
            </b-field>
            <b-table
                :data="data"
                paginated
                :loading="loading"
                :per-page="perPage"
                backend-pagination
                default-sort="id"
                backend-sorting
                :current-page="currentPage"
                :total="total"
                @sort="sorted"
                :backend-filtering="true"
                @page-change="pageChange"
                @filters-change="getData"
                >
                <template v-for="column in columns">
                    <b-table-column :key="column.id" v-bind="column">
                        <template
                            v-if="column.searchable && !column.numeric"
                            #searchable="props">
                            <b-input
                                v-model="props.filters[props.column.field]"
                                :placeholder="`Buscar por ${props.column.label}`"
                                icon="magnify"
                                size="is-small" />
                        </template>
                        <template v-slot="props">
                            <template v-if="!column.custom">
                                {{ props.row[column.field] }}
                            </template>
                            <template v-else-if="column.field === 'actions'">
                                <ActionButtons :edit="true"
                                               :show="true"
                                               :dele="true"
                                               :url="url"
                                               :row="props.row"
                                />
                            </template>
                        </template>
                    </b-table-column>
                </template>
            </b-table>
        </section>
    </div>
</template>

<script>
export default {
    name: "UserTable",
    props: {
        url: String
    },
    data() {
        return {
            data: [],
            currentPage: 1,
            perPage: 10,
            total: 0,
            order: 'desc',
            field: 'id',
            loading: false,
            columns: [
                {
                    label: 'Acciones',
                    searchable: false,
                    custom: true,
                    field: 'actions'
                },
                {
                    field: 'id',
                    label: 'ID',
                    numeric: true,
                    searchable: true,
                },
                {
                    field: 'name',
                    label: 'Nombre',
                    searchable: true
                },
                {
                    field: 'username',
                    label: 'Nombre Usuario',
                    searchable: true
                },
                {
                    field: 'email',
                    label: 'Email',
                    searchable: true
                }
            ]
        }
    },
    created() {
        this.prepareComponent()
    },
    methods: {
        prepareComponent() {
            this.getData()
        },
        sorted(field, order) {
            this.field = field;
            this.order = order;
            this.getData()
        },
        pageChange(page) {
            this.currentPage = page;
            this.getData()
        },
        getData(filters = {}) {
            console.log(filters);
            this.loading = true;
            axios.get(this.url, {
                params: Object.assign({
                    perPage: this.perPage,
                    page: this.currentPage,
                    field: this.field,
                }, filters)
            }).then(response => {
                console.log(this.data);
                this.data = response.data.data;
                this.total = response.data.total
            }).catch(errors => {
                console.error(errors);
                // eslint-disable-next-line
            }).finally(() =>{
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>

</style>
