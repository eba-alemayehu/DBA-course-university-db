<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <div style="padding: 1em 2.5em">
              <b-form @submit="onSubmit" @reset="onReset">
                <div class="row">
                  <div class="col-md-6">
                    <b-form-group
                      id="input-group-1"
                      label="First name"
                      label-for="first-name">
                      <b-form-input
                        id="first-name"
                        v-model="student.name"
                        type="text"
                        required
                        placeholder="First name"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                     <b-form-group
                      id="input-group-1"
                      label="Last name"
                      label-for="last-name" >
                      <b-form-input
                                id="last-name" 
                                type="text"
                                label="Last Name"
                                placeholder="Last Name"
                                v-model="student.father_name">
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
            <!-- ==================================================================-->
                <div class="row">
                  <div class="col-md-4"> 
                    <b-form-group
                      id="input-group-1"
                      label="Country"
                      label-for="country">
                      <b-form-select
                        id="country"
                        v-model="student.country"
                        :options="countries"
                        required
                        placeholder="Contries">
                        </b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-md-3">
                    <b-form-group
                      id="input-group-1"
                      label="Street"
                      label-for="street">
                      <b-form-input 
                                id="street"
                                type="text"
                                label="Street"
                                placeholder="Street"
                                v-model="student.street">
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-3">
                 
                     <b-form-group
                        id="input-group-1"
                        label="city"
                        label-for="city">
                        <b-form-input 
                                  id="city"
                                  type="text"
                                  label="City"
                                  placeholder="City"
                                  v-model="student.city">
                        </b-form-input>
                      </b-form-group>
                  </div>
                   <div class="col-md-2">
                        <b-form-group
                        id="input-group-1"
                        label="zip"
                        label-for="zip">
                          <b-form-input
                                    id="zip" 
                                    type="number"
                                    label="zip"
                                    placeholder="Zip"
                                    v-model="student.zip">
                          </b-form-input>
                        </b-form-group>
                  </div>
                </div>
    <!-- ==================================================================-->
                <div class="row">
                  <div class="col-md-6">
                     <b-form-group
                        id="input-group-1"
                        label="Email"
                        label-for="email">
                        <b-form-input 
                                  id="email"
                                  type="email"
                                  label="Email"
                                  placeholder="Email"
                                  v-model="student.email_address">
                        </b-form-input>
                      </b-form-group>
                  </div>
                    <div class="col-md-6">
                     <b-form-group
                        id="input-group-1"
                        label="Phone"
                        label-for="phone">
                        <b-form-input 
                                  id="phone"
                                  type="tel"
                                  label="Phone"
                                  placeholder="Phone"
                                  v-model="student.phone_no">
                        </b-form-input>
                      </b-form-group>
                  </div>
                </div>
    <!-- ==================================================================-->
                <div class="row">
                  <div class="col-md-4">
                     <b-form-group
                      id="input-group-1"
                      label="Citizenship"
                      label-for="Citizenship">
                      <b-form-select
                        id="Citizenship"
                        v-model="student.citizenship"
                        :options="countries"
                        required
                        placeholder="Citizenship">
                        </b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-md-2">
                     <b-form-group
                      id="input-group-1"
                      label="Sex"
                      label-for="sex">
                      <b-form-select
                        id="sex"
                        v-model="student.sex"
                        :options="[
                            { value: 'male', text: 'Male' },
                            { value: 'female', text: 'Female' },
                        ]"
                        required
                        placeholder="Citizenship">
                        </b-form-select>
                    </b-form-group>
                  </div>
                  <div class="col-md-2">
                     <b-form-group
                        id="input-group-1"
                        label="Date of birth"
                        label-for="dob">
                        <b-form-input 
                                  id="dob"
                                  type="date"
                                  label="Date of birth"
                                  required
                                  v-model="student.date_of_birth">
                        </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-2">
                     <b-form-group
                        id="input-group-1"
                        label="Zone"
                        label-for="zone">
                        <b-form-input 
                                  id="zone"
                                  type="text"
                                  label="Zone"
                                  placeholder="Zone"
                                  v-model="student.zone">
                        </b-form-input>
                      </b-form-group>
                  </div>
                  <div class="col-md-2">
                     <b-form-group
                        id="input-group-1"
                        label="State"
                        label-for="state">
                        <b-form-input 
                                  id="state"
                                  type="text"
                                  label="State"
                                  placeholder="State"
                                  v-model="student.state">
                        </b-form-input>
                      </b-form-group>
                  </div>
                </div>
    <!-- ==================================================================-->
                <div class="row">
                  <div class="col-md-6">
                     <b-form-group
                        id="input-group-1"
                        label="Major field"
                        label-for="major_field">
                        <b-form-select
                          id="major_field"
                          v-model="student.major_field"
                          :options="fields"
                          required>
                          </b-form-select>
                      </b-form-group>
                  </div>
                    <div class="col-md-6">
                     <b-form-group
                        id="input-group-1"
                        label="Minor field"
                        label-for="minor_field">
                        <b-form-select
                          id="minor_field"
                          v-model="student.minor_field"
                          :options="fields"
                          required>
                          </b-form-select>
                      </b-form-group>
                  </div>
                </div>

    <!-- ==================================================================-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Comment</label>
                      <textarea rows="5" class="form-control border-input"
                                placeholder="Comment"
                                v-model="student.comment">

                      </textarea>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <b-button type="submit" variant="primary">Register</b-button>
                </div>
                <div class="clearfix"></div>
              </b-form>
            </div>
          </div>
        </card>
      </div>
    </div>
</template>
<script>

import { PaperTable } from "@/components";
import { 
  BButton,
  BForm,
  BInputGroup,
  BFormInput,
  BFormGroup,
  BCard,
  BFormCheckbox,
  BFormSelect,
  BFormCheckboxGroup, 
   } from 'bootstrap-vue'; 

import { Select } from 'element-ui'; 
// import { axios } from "axios"; 
import Axios from 'axios';

import $ from "jquery"; 
import rp from 'request-promise'; 

import { Modal, Button } from '@/components'; 
var tableColumns = ["Fullname", "Citizenship", "Major_field", "Minor_field", "Email_address", "Sex"];
var tableData = [];
var countries = []; 
var fields = []; 

export default {
  components: {
    PaperTable, 
    'b-button' : BButton, 
    'b-form': BForm, 
    'b-form-input': BFormInput, 
    'b-form-group': BFormGroup, 
    'b-card': BCard, 
    'b-form-checkbox': BFormCheckbox, 
    'b-form-checkbox-group': BFormCheckboxGroup, 
    'b-form-select': BFormSelect, 
    'el-select': Select
  },
  created: function () {
      $.get("https://10.129.17.145:44384/api/field")
      .done( fields => {
          console.log(fields); 
          this.fields = fields.map(field => {
            field.value = field.id;  
            field.text = field.name; 
            return field; 
          }); 
          console.log(this.fields); 
          $.get("https://10.129.17.145:44384/api/student")
                .done(response => {
                    this.table1.data = response.map(student => {
                      student.fullname = [student.name, student.father_name].join(" ");
                      student.major_field = fields.find(field => field.id == student.major_field).name; 
                      student.minor_field = fields.find(field => field.id == student.minor_field).name; 
                      return student; 
                    }); 
                }); 
      }); 

      $.get("https://10.129.17.145:44384/api/country")
      .done( _countries => {
        console.log(_countries)
        this.countries = _countries.map(country => {
            country.value = country.id;  
            country.text = country.name + " (" + country.code + ") "; 
            return country; 
          }); ; 
      })
     
  },
  data() {
    return {
      table1: {
        title: "Students Form",
        subTitle: "Hear is the list of registerd students",
        columns: [...tableColumns],
        data: [...tableData]
      },
      student: {
        name: "",
        father_name: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        zone: "",
        phone_no: "",
        date_of_birth: "",
        email_address: "",
        sex: "",
        citizenship: "",
        comment: "",
        password: "",
        major_field: "", 
        minor_field: ""
      }, 
      countries: [...countries],
      fields: fields
    };
  }, 
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    onSubmit(evt) {
      evt.preventDefault()
      console.log(this.student); 
      // Axios.post("https://10.129.17.145:44384/api/student", this.student)
      // .then((response) => {
      //   console.log(response); 
      // }); 
      $.post("https://10.129.17.233:44384/api/student", this.student, function(result){
          window.location.href = "/#/stats"; 
      });

      // $.ajax({
      //     url:"https://10.129.17.145:44384/api/student",
      //     type:"POST",
      //     data:this.student,
      //     contentType:"application/json; charset=utf-8",
      //     dataType:"json",
      //     success: function(data){
      //       console.log(data);
      //     }
      //   });
      // var options = {
      //     method: 'POST',
      //     uri: 'https://10.129.17.145:44384/api/student',
      //     body: {
      //         some: 'payload'
      //     },
      //     json: true // Automatically stringifies the body to JSON
      // };
      
      // rp(options)
      //     .then(function (parsedBody) {
      //         console.log(parsedBody); 
      //     })
      //     .catch(function (err) {
      //         // POST failed...
      //     });
      // $.post("https://10.129.17.145:44384/api/student", this.student)
      // .done(response => {
      //   console.log(response); 
      // })
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
<style>
</style>
