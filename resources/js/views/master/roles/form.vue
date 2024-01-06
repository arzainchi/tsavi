<script>
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

/**
 * Starter component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            formModel: {
                id: this.$route.params?.id,
                name: "",
                access: {
                    user: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    roles: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    parent: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    student: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    tentor: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    presence: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    invoice: {
                        create: false,
                        update: false,
                        delete: false,
                        view: false,
                    },
                    report_invoice: {
                        view: false,
                    },
                },
            },
            mode: "add",
        };
    },
    mounted() {
        console.log(this.$route);
        if (this.formModel.id) {
            this.mode = "edit";
            this.getData();
        }
    },
    methods: {
        async getData() {
            const data = await axios
                .get("/api/roles/" + this.formModel.id)
                .then((response) => response.data)
                .catch((err) => {
                    console.log(err);
                    return false;
                });
            if (!data) {
                alert("kosong !");
                this.back();
            }
            if (data.data) {
                (this.formModel.id = data.data.id),
                    (this.formModel.name = data.data.name);
                console.log(data.data.access);
                let access = data.data.access;
                Object.entries(access).forEach((val) => {
                    this.formModel.access[val[0]] = val[1];
                });
            }
        },
        save() {
            Swal.fire({
                title: "Apakah Anda yakin menyimpan data ini?",
                text: "",
                icon: "warning",
                showCancelButton: true,
                // confirmButtonColor: "#34c38f",
                // cancelButtonColor: "#f46a6a",
                confirmButtonText: "Ya, saya yakin!",
            }).then((result) => {
                if (result.value) {
                    if (this.mode == "add") {
                        this.store();
                    } else {
                        this.update();
                    }
                }
            });
        },
        async store() {
            const data = await axios
                .post("/api/roles", this.formModel)
                .then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });
            if (!data) {
                Swal.fire("Gagal!", "Terjadi Kesalahan.", "error");
                return;
            }

            Swal.fire("Berhasil!", "Data berhasil tersimpan.", "success");
            this.back();
        },
        async update() {
            const data = await axios
                .put("/api/roles/" + this.formModel.id, this.formModel)
                .then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });
            if (!data) {
                Swal.fire("Gagal!", "Terjadi Kesalahan.", "error");
                return;
            }

            Swal.fire("Berhasil!", "Data berhasil tersimpan.", "success");
            this.back();
        },
        back() {
            this.$router.push({ name: "master.roles" });
        },
    },
};
</script>

<style>
/* input.largerCheckbox {
    width: 20px;
    height: 20px;
} */
</style>

<template>
    <Layout>
        <PageHeader title="Hak Akses" pageTitle="Master" />

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="d-flex justify-content-between">
                            <span>Form Hak Akses</span>
                            <div class="d-flex gap-2">
                                <BButton
                                    variant="secondary"
                                    size="sm"
                                    type="button"
                                    @click="back()"
                                >
                                    <i
                                        class="bx bx-arrow-back font-size-14 align-middle"
                                    ></i>
                                    Kembali
                                </BButton>
                                <BButton
                                    variant="primary"
                                    size="sm"
                                    type="button"
                                    @click="save()"
                                >
                                    <i
                                        class="bx bx-save font-size-14 align-middle"
                                    ></i>
                                    Simpan
                                </BButton>
                            </div>
                        </BCardTitle>

                        <BForm class="form-horizontal mb-3" role="form">
                            <BFormGroup
                                class="mb-3"
                                label-cols-lg="2"
                                label="Name"
                            >
                                <BFormInput
                                    type="text"
                                    placeholder="Masukkan Nama Hak Akses"
                                    v-model="formModel.name"
                                ></BFormInput>
                            </BFormGroup>
                        </BForm>

                        <BRow>
                            <BCol cols="4">
                                <div role="tablist">
                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-role
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Role</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-role"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.roles
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.roles
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.roles
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.roles
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>

                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-user
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">User</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-user"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.user
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.user
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.user
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.user
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>

                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-parents
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Wali Murid</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-parents"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.parent
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.parent
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.parent
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.parent
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>

                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-student
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Student</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-student"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.student
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.student
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.student
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.student
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>

                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-tentor
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Tentor</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-tentor"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.tentor
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.tentor
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.tentor
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.tentor
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>
                                </div>
                            </BCol>
                            <BCol cols="4">
                                <div role="tablist">
                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-presence
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Absensi</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-presence"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access
                                                            .presence.view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access
                                                            .presence.create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access
                                                            .presence.update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access
                                                            .presence.delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>

                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-invoice
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">Invoice</h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-invoice"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.invoice
                                                            .view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.invoice
                                                            .create
                                                    "
                                                >
                                                    Create
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.invoice
                                                            .update
                                                    "
                                                >
                                                    Update
                                                </BFormCheckbox>
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access.invoice
                                                            .delete
                                                    "
                                                >
                                                    Delete
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>
                                </div>
                            </BCol>
                            <BCol cols="4">
                                <div role="tablist">
                                    <BCard no-body class="mb-1 shadow-none">
                                        <BCardHeader
                                            header-tag="header"
                                            role="tab"
                                        >
                                            <BLink
                                                v-b-toggle.accordion-report-invoice
                                                class="text-dark"
                                                href="javascript: void(0);"
                                            >
                                                <h6 class="m-0">
                                                    Laporan Invoice
                                                </h6>
                                            </BLink>
                                        </BCardHeader>
                                        <BCollapse
                                            id="accordion-report-invoice"
                                            accordion="my-accordion"
                                            role="tabpanel"
                                        >
                                            <BCardBody
                                                class="d-flex gap-2 flex-wrap"
                                            >
                                                <BFormCheckbox
                                                    class="mb-3 me-2 form-check-input largerCheckbox"
                                                    v-model="
                                                        formModel.access
                                                            .report_invoice.view
                                                    "
                                                >
                                                    View
                                                </BFormCheckbox>
                                            </BCardBody>
                                        </BCollapse>
                                    </BCard>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
