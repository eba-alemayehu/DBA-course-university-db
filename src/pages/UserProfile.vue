<template>
    <div class="row">
      <!-- <div class="col-xl-4 col-lg-5 col-md-6">
        <user-card>

        </user-card>
        <members-card>

        </members-card>
      </div> -->
      <!-- <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-profile-form>

        </edit-profile-form>
      </div> -->  
      <div class="col-md-12" style="text-align: right; margin-bottom: 1em">
        <router-link to="stdent/form">
          <n-button type="primary" @click.native="modals.classic = true">
            Register students
          </n-button>
        </router-link>
      </div>
      
      <div>
      </div>
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
// import EditProfileForm from "./UserProfile/EditProfileForm.vue";
// import UserCard from "./UserProfile/UserCard.vue";
// import MembersCard from "./UserProfile/MembersCard.vue";
// export default {
//   components: {
//     EditProfileForm,
//     UserCard,
//     MembersCard
//   }
// };

import { PaperTable } from "@/components";
// import { axios } from "axios"; 
import $ from "jquery"; 
import { Modal, Button } from '@/components'; 
var tableColumns = ["Fullname", "Citizenship", "Major_field", "Minor_field", "Email_address", "Sex"];
var tableData = [];

export default {
  components: {
    PaperTable, 
    Modal,
    [Button.name]: Button, 
    'n-button': Button
  },
  created: function () {
      $.get("https://localhost:44384/api/field")
      .done( fields => {
          $.get("https://localhost:44384/api/student")
                .done(response => {
                    this.table1.data = response.map(student => {
                      student.fullname = [student.name, student.fathter_name].join(" ");
                      student.major_field = fields.find(field => field.id == student.major_field).name; 
                      student.minor_field = fields.find(field => field.id == student.minor_field).name; 
                      return student; 
                    }); 
                }); 
      }); 
     
  },
  data() {
    return {
      table1: {
        title: "Students list",
        subTitle: "Hear is the list of registerd students",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
      }, 
      modals : {
        classic: false
      }
    };
  }
};
</script>
<style>
</style>
