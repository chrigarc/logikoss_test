<template>
    <div class="field has-addons">
        <p class="control" v-if="show">
            <a :href="`${url}/${row[primaryKey]}`"  class="button is-primary is-small"><b-icon icon="eye"></b-icon></a>
        </p>
        <p class="control" v-if="edit">
            <a :href="`${url}/${row[primaryKey]}/edit`"  class="button is-warning is-small"><b-icon icon="edit"></b-icon></a>
        </p>
        <p class="control" v-if="dele">
            <a href="#" @click="deleteData(row)" class="button is-danger is-small" >
                <b-icon icon="trash"></b-icon>
            </a>
        </p>
        <b-modal :active.sync="modalActive" :width="640">
          <slot :item="row">
            </slot>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "ActionButtons",
        data() {
            return  {
                item: {},
                modalActive: false,
            }
        },
        props: {
            edit:Boolean,
            show:Boolean,
            dele:Boolean,
            row: Object,
            primaryKey: {
                default: 'id'
            },
            noModal: String || Boolean,
            url: String,
        },
        methods: {
            showData(data) {
                this.modalActive = true
            },
            deleteData(data) {
                const loader = this.$loading.show();
                axios.delete(`${this.url}/${data[this.primaryKey]}`).then(response => {
                    this.$emit('deleteData')
                }, error => {
                }).finally(() => {
                    loader.hide();
                })
            }
        }
    }
</script>

<style scoped>

</style>
