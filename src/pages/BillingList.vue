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
const tableColumns = ["transaction_no", "studint_id", "log", "amount_owed", "amount_paid", "Comment"];
let tableData = [];

export default {
  components: {
    PaperTable
  },
  created: function () {
      $.get("https://localhost:44384/api/billing")
      .done( fields => {
          tableData = fields;  
          this.table.data = [...tableData]; 
      }); 
     
  },
  data() {
    return {
      table: {
        title: "Billing log",
        subTitle: "Here is a recent billings you have recived ",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>
