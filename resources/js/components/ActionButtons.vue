<template>
    <div class="field has-addons">
        <p class="control" v-if="show">
            <button class="button is-info is-small" type="button" @click="modalActive = true" v-if="noModal === undefined">
                <b-icon icon="eye"></b-icon>
            </button>
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
                this.$dialog.confirm({
                    title: 'Eliminar Registro',
                    message: '¿Estas seguro de <b>eliminar</b> este registro?',
                    cancelText: 'Cancelar',
                    confirmText: 'Eliminar',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                        this.$http.delete(`${this.url}/${data[this.primaryKey]}`).then(response => {
                            this.$notify.success(response.data)
                            this.$emit('deleteData')
                        }, error => {
                            this.$notify.danger(error.response.data.message)
                        })
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>
