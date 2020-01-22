<template>
    <div class="row">
      <div class="col-12">
       <card :title="table.title" :subTitle="table.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table.data" :columns="table.columns">

            </paper-table>
          </div>
        </card>
      </div>

      
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import $ from "jquery"; 
const tableColumns = ["name", "section", "max_size", "start", "end", "room_id", "department_id", "course_id"];
let tableData = [];

export default {
  components: {
    PaperTable
  },
  created: function () {
      $.get("https://localhost:44384/api/class")
      .done( fields => {
          tableData = fields;  
          this.table.data = [...tableData]; 
          console.log(tableData); 
      }); 
     
  },
  data() {
    return {
      table: {
        title: "Classes",
        subTitle: "Here is a classes",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>
