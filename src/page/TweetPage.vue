<template>
  <div class="tweet-page">
    <div class="clay tweet-bord">
      <textarea id="" cols="30" rows="10" v-model="tweet_text" placeholder="Please write the content to tweet here"></textarea>
      <div class="tag-disp">
        <div class="clay tag" v-for="tag in tag_list " :key="tag.id">
          # {{tag}}
        </div>
      </div>
      <share-network
        class="clay tweet-btn"
        network="Twitter"
        url=""
        :title="tweet_text"
        description=""
        quote=""
        :hashtags="tags"
      >
        Tweet
      </share-network>
    </div>
    <!-- <div class="clay time-line-bord">
      
      タイムライン
    </div> -->
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
      tweet_text:"",
      tags:"withmedia,test,test,tsetset,st,,ets,ets,t,set,ets",
      tag_list:[]
    };
  },
  created() {
    this.tag_list = this.tags.split(',');
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.tweet-page{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  .tweet-bord{
    height: 460px;
    --clay-background: #efefef;
    --clay-border-radius: 30px;
    padding: 30px;
    margin-right: 10px;
    textarea{
      width: 350px;
      height: 275px;
      resize: none;
      font-size: 18px;
      font-weight: 900;
      background-color: rgba($color: #000000, $alpha: 0.0);
      outline: none;
      border: none;
    }
    .tag-disp{
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      overflow: scroll;
      padding: 10px;
      .tag{
        --clay-background: #0868F9;
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
    .tweet-btn{
      cursor: pointer;
      text-decoration: none;
      --clay-background: #1133D7;
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
  .time-line-bord{
    height: 460px;
    width: 410px;
    --clay-background: #efefef;
    --clay-border-radius: 30px;
    padding: 30px;
    margin-left: 10px;
    
  }
}

</style>