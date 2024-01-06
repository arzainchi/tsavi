<script>
import axios from "axios";
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";

/**
 * Starter component
 */
export default {
    components: { Layout, PageHeader, Vue3Datatable },
    data() {
        return {
            listData: [],
            isLoading: true,
            totalRows: 0,
            params: {
                page: 0,
                page_size: 10,
                name: "",
                username: "",
                email: "",
            },
            cols: [
                { field: "id", title: "ID", isUnique: true, hide: true },
                { field: "name", title: "Nama" },
                { field: "email", title: "Email" },
                { field: "action", title: "", cellClass: "text-end" },
            ],
            no: 0,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            this.isLoading = true;
            const data = await axios
                .get("/api/users", {
                    params: this.params,
                })
                .then((response) => {
                    return response.data;
                });
            this.listData = data.data.data;
            this.totalRows = data.data.total;
            this.isLoading = false;
        },
        changePage(data) {
            this.params.page = data.current_page;
            this.params.page_size = data.pagesize;
            this.getData();
        },
        addData() {

        }
    },
};
</script>
<template>
    <Layout>
        <PageHeader title="Users" pageTitle="Master" />
        <div class="row">
            <div class="card col-12">
                <div class="card-header d-flex justify-content-between">
                    <h4>List User</h4>
                    <div class="float-end">
                        <button class="btn btn-primary btn-sm">
                            <i class="bx bx-plus font-size-14 align-middle"></i>
                            Tambah Data
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Filter Name..."
                                v-model="params.name"
                                @keyup="getData()"
                            />
                        </div>
                        <div class="col-md-4">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Filter Username..."
                                v-model="params.username"
                                @keyup="getData()"
                            />
                        </div>
                        <div class="col-md-4">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Filter Email..."
                                v-model="params.email"
                                @keyup="getData()"
                            />
                        </div>
                    </div>
                    <vue3-datatable
                        :rows="listData"
                        :columns="cols"
                        :loading="isLoading"
                        :totalRows="totalRows"
                        :isServerMode="true"
                        :pageSize="params.page_size"
                        @change="changePage"
                    >
                        <template #action="">
                            <div class="d-flex gap-2 justify-content-end">
                                <button class="btn btn-info btn-sm">
                                    <i class="bx bx-edit"></i> Edit
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <i class="bx bx-trash"></i> Delete
                                </button>
                            </div>
                        </template>
                    </vue3-datatable>
                </div>
            </div>
        </div>
    </Layout>
</template>
