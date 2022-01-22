<template>
  <div class="tweet-page">
    <div id="title">With Media</div>
    <div class="bord-container">
      <div class="clay tweet-bord">
        <textarea
          id=""
          cols="30"
          rows="10"
          v-model="tweet_text"
          placeholder="ツイート内容を入力"
        ></textarea>
        <div class="tag-disp">
          <div class="clay tag" v-for="tag in tag_list" :key="tag.id">
            # {{ tag }}
          </div>
        </div>
        <div class="clay tweet-btn" @click="postTweet()">Tweet</div>
      </div>
      <div class="clay time-line-bord">
        <span class="timeline-text">タイムライン</span>
        <div class="timeline-card-container">
          <div
            class="clay tweet-card"
            v-for="post_text in post_list"
            :key="post_text.id"
          >
            {{ post_text }}
          </div>
        </div>
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
      tweet_text: "",
      tags: "",
      tag_list: [],
      url_id: "",
      post_list: [],
    };
  },
  created() {
    this.url_id = this.$route.params.tweetid;

    firebase
      .database()
      .ref(this.url_id)
      .once("value", (firebase_tags) => {
        let data = JSON.parse(JSON.stringify(firebase_tags.val()));
        if (data != null) {
          this.tags = data.hashtag;
          this.tag_list = data.hashtag.split(",");
        } else {
          alert("ハッシュタグが存在しません\n登録ページに切り替わります");
          this.$router.push("/");
        }
      });
  },
  mounted() {
    firebase
      .database()
      .ref(this.url_id)
      .on("value", (firebase_tags) => {
        let data = JSON.parse(JSON.stringify(firebase_tags.val()));
        console.log(data);
        if (data != null) {
          this.make_post_list(data);
        }
      });
  },
  computed: {},
  methods: {
    make_post_list(data) {
      let disp_list = [];
      for (let post of Object.keys(data)) {
        if (post != "hashtag") {
          disp_list.push(data[post].content);
        }
      }
      this.post_list = disp_list;
    },
    postTweet() {
      if (this.tweet_text === "") {
        alert("ツイート内容がありません");
      } else {
        let shareUrl =
          "https://twitter.com/intent/tweet?text=" +
          this.tweet_text +
          "&url=&hashtags=" +
          this.tags;
        window.open(
          shareUrl,
          "twitter",
          "top=200,left=300,width=600,height=400"
        );
        firebase.database().ref(this.url_id).push({
          content: this.tweet_text,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tweet-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bord-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .tweet-bord {
      height: 460px;
      --clay-background: #efefef;
      --clay-border-radius: 30px;
      padding: 30px;
      margin-right: 10px;
      textarea {
        width: 350px;
        height: 275px;
        resize: none;
        font-size: 18px;
        font-weight: 900;
        background-color: rgba($color: #000000, $alpha: 0);
        outline: none;
        border: none;
      }
      .tag-disp {
        width: 350px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        overflow: scroll;
        padding: 10px;
        .tag {
          --clay-background: #0868f9;
          --clay-border-radius: 999px;
          white-space: nowrap;
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
      .tweet-btn {
        cursor: pointer;
        text-decoration: none;
        --clay-background: #1133d7;
        --clay-border-radius: 999px;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 900;
        color: #fefefe;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .time-line-bord {
      height: 460px;
      width: 410px;
      color: #000000;
      --clay-background: #efefef;
      --clay-border-radius: 30px;
      padding: 30px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .timeline-text {
        font-size: 25px;
        font-weight: 900;
        margin-bottom: 20px;
      }
      .timeline-card-container {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .tweet-card {
          --clay-background: #0a90c5;
          --clay-border-radius: 20px;
          padding: 20px;
          font-weight: 900;
          color: #efefef;
          width: 300px;
          margin: 7px 0;
        }
      }
    }
  }
}
</style>
