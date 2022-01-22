<template>
  <div id="enroll">
    <div id="title">With Media</div>
    <div id="enroll-bord" class="clay card">
      <span id="bord-text">登録されたハッシュタグ</span>
      <div id="tag-list-container">
        <div class="clay tag" v-for="tag in tag_list" :key="tag.id">
          # {{ tag }}
        </div>
      </div>
    </div>
    <div class="clay text-box-container">
      <input
        type="text"
        placeholder="登録するハッシュタグをコンマ区切りで入力"
        v-model="tag_box"
        @input="parse_text2tag"
      />
    </div>
    <div class="clay register-button" @click="RegistHashTag">URLの発行</div>
    <div class="modal-bg" v-if="modal_flag">
      <div class="clay card modal">
        <span class="modal-text">発行されたURL</span>
        <span class="share-url">{{ share_url }}</span>
        <div class="clay modal-button" @click="copy_share_url">URLのコピー</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

export default {
  name: "TrimSelectPage",
  props: {},
  components: {},
  data() {
    return {
      tag_box: "",
      tag_list: [],
      share_url: "aa",
      modal_flag: false,
    };
  },
  created() {},
  computed: {},
  methods: {
    parse_text2tag() {
      this.tag_list = this.tag_box.split(",");
    },
    RegistHashTag() {
      if (this.tag_box === "") {
        alert("ハッシュタグが入力されていません");
      } else {
        let str =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let hashtag_id = "";
        let n = 10; // 繰り返し回数

        for (let i = 0; i < n; i++) {
          hashtag_id += str[~~(Math.random() * str.length)];
        }

        firebase.database().ref(hashtag_id).set({
          hashtag: this.tag_box,
        });

        let url = location.href;

        this.share_url = url + hashtag_id;
        console.log(this.share_url);
        this.modal_flag = true;
      }
    },
    copy_share_url() {
      navigator.clipboard.writeText(this.share_url);
      alert("URLをコピーしました");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#enroll {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  #enroll-bord {
    width: 600px;
    min-height: 200px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    #bord-text {
      font-size: 25px;
      font-weight: 900;
      margin-bottom: 20px;
    }
    #tag-list-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      .tag {
        --clay-background: #0868f9;
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
  .text-box-container {
    --clay-background: #efefef;
    --clay-border-radius: 999px;
    width: 400px;
    height: 50px;
    padding: 10px 15px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      font-size: 18px;
      font-weight: 900;
      background-color: rgba($color: #000000, $alpha: 0);
      outline: none;
      border: none;
    }
  }
  .register-button {
    cursor: pointer;
    --clay-background: #1133d7;
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
  .modal-bg {
    width: 100vw;
    height: 100vh;
    background-color: #00000077;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .modal {
      width: 400px;
      color: #000000;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .modal-text {
        font-size: 25px;
        font-weight: 900;
        margin-bottom: 20px;
      }
      .share-url {
        width: 100%;
        overflow-x: scroll;
      }
      .modal-button {
        cursor: pointer;
        --clay-background: #1133d7;
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
  }
}
</style>
