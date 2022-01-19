<template>
  <div id="enroll">
    <div id="enroll-bord" class="clay card">
      <span id="bord-text">Register the hashtag !!</span>
      <div id="tag-list-container">
        <div class="clay tag" v-for="tag in tag_list " :key="tag.id">
          # {{tag}}
        </div>
      </div>
    </div>
    <div class="clay text-box-container">
      <input type="text" placeholder="Write the tags here separated by ,(comma) " v-model="tag_box" @input="parse_text2tag">
    </div>
    <div class="clay register-button">
      Register!!
    </div>
  </div>
</template>

<script>
export default {
  name: "TrimSelectPage",
  props: {
  },
  components: {
  },
  data() {
    return {
      tag_box:"",
      tag_list:[]
    };
  },
  created() {},
  computed: {},
  methods: {
    parse_text2tag(){
      this.tag_list = this.tag_box.split(',')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #enroll{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    #enroll-bord{
      width: 600px;
      min-height: 200px;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      #bord-text{
        font-size: 25px;
        font-weight: 900;
        margin-bottom: 20px;
      }
      #tag-list-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        .tag{
          --clay-background: #0868F9;
          --clay-border-radius: 999px;
          padding: 10px 15px;
          margin: 5px;
          font-weight: 900;
          color: #fefefe;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .text-box-container{
      --clay-background: #efefef;
      --clay-border-radius: 999px;
      width: 400px;
      height: 50px;
      padding: 10px 15px;
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        width: 100%;
        font-size: 18px;
        font-weight: 900;
        background-color: rgba($color: #000000, $alpha: 0.0);
        outline: none;
        border: none;
      }
    }
    .register-button{
      cursor: pointer;
      --clay-background: #1133D7;
      --clay-border-radius: 999px;
      padding: 10px 20px;
      margin-top: 25px;
      font-size: 20px;
      font-weight: 900;
      color: #fefefe;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

</style>