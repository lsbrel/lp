<script>
import { useAppStore } from "@/stores";
import Response from "@lib/Response";
import Loading from "@components/Loading.vue";
import LeafletMap from "@/components/LeafletMap.vue";

export default {
  components: {
    Loading,
    LeafletMap,
  },
  data() {
    return {
      request: useAppStore().getApi,
      profile: false,
    };
  },
  methods: {
    async getProfileData() {
      await this.request
        .index(`${this.$route.params.type}/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.status) {
            this.profile = res.data;
          } else {
            Response.toastMessage(res.data.status, res.data.messageCode);
          }
          //
        });
    },
  },
  computed: {
    updateData() {
      return true;
    },
  },
  async created() {
    await this.getProfileData();
  },
};
</script>
<template>
  <Loading v-if="!profile" />
  <div v-else class="flex flex-col gap-3 p-4 h-full">
    <!-- HEADER -->
    <div
      class="flex flex-row text-black text-shadow-md items-center rounded-md p-2"
    >
      <span class="mr-10 p-4">FOTO</span>
      <span class="mx-auto uppercase text-xl p-3 align-center">{{
        profile.content.profile.nome
      }}</span>
    </div>
    <hr class="bg-slate-900 w-1/2 mx-auto mt-0" />
    <!-- HEADER -->

    <!-- USER-->
    <div class="flex flex-col items-center rounded-md p-2 border-1">
      <label class="capitalize mr-auto mb-1">{{ $t("name") }}</label>
      <input
        type="text"
        class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
        v-model="profile.content.profile.nome"
        :disabled="updateData"
      />
      <label class="capitalize mr-auto mb-1">email</label>
      <input
        type="text"
        class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
        v-model="profile.content.profile.email"
        :disabled="updateData"
      />
      <label class="capitalize mr-auto mb-1"
        >{{ $t("phone") }} - {{ profile.content.telefone[0].tipo }}</label
      >
      <input
        type="text"
        class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
        v-model="profile.content.telefone[0].numero"
        :disabled="updateData"
      />
      <label class="capitalize mr-auto mb-1">{{
        profile.content.documento[0].tipo
      }}</label>
      <input
        type="text"
        class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
        v-model="profile.content.documento[0].numero"
        :disabled="updateData"
      />
    </div>
    <!-- USER-->

    <!-- ENDERECO-->
    <div class="flex flex-row h-3/4 gap-2 items-center rounded-md p-2 border-1">
      <div class="w-3/4 rounded-md h-full">
        <label class="capitalize mr-auto mb-1">cep</label>
        <input
          type="text"
          class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
          v-model="profile.content.endereco[0].cep"
          :disabled="updateData"
        />
        <label class="capitalize mr-auto mb-1">Bairro</label>
        <input
          type="text"
          class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
          v-model="profile.content.endereco[0].bairro"
          :disabled="updateData"
        />
        <label class="capitalize mr-auto mb-1">numero</label>
        <input
          type="text"
          class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
          v-model="profile.content.endereco[0].numero"
          :disabled="updateData"
        />
        <label class="capitalize mr-auto mb-1">rua</label>
        <input
          type="text"
          class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
          v-model="profile.content.endereco[0].rua"
          :disabled="updateData"
        />
        <label class="capitalize mr-auto mb-1">cidade</label>
        <input
          type="text"
          class="p-2 border border-slate-400 shadow-sm rounded-md w-full mb-3"
          v-model="profile.content.endereco[0].cidade_id"
          :disabled="updateData"
        />
      </div>
      <div class="w-1/4 h-full">
        <LeafletMap />
      </div>
    </div>
    <!-- ENDERECO-->
  </div>
</template>
