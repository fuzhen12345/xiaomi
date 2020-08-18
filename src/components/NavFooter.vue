<template>
  <div class="footer">
    <div class="footerTop">
      <div class="footerTop_text">
        <div>
          TOZO
          <img src alt />
        </div>
        <p>Technology Origion,Simplicate Ultimate</p>
      </div>
    </div>
    <div class="footer_contaion">
      <div class="footer_contaion_always">Always be the first to know</div>
      <div class="footer_contaion_sign">Sign up for the latest news from TOZO</div>
      <div class="footer_contaion_search">
        <input type="text" placeholder="Enter your email" />
        <div class="footer_contaion_search_btn">Subscribe</div>
      </div>
      <div class="footer_contaion_img">
        <img src="/imgs/1F6E.png" alt />
      </div>
    </div>
    <div class="footer_nav">
      <div class="footer_nav_text">
        <ul class="electronics">
          <li class="electronics_h1">Electronics</li>
          <li>Headphones</li>
          <li>Power Banks</li>
          <li>Chargers</li>
          <li>Smart Watch</li>
        </ul>
        <ul class="csese">
          <li class="electronics_h1">Cases & Protection</li>
          <li>Apple</li>
          <li>HUAWEI</li>
          <li>SAMSUNG</li>
          <li>Others</li>
        </ul>
        <ul class="support">
          <li class="electronics_h1">Support</li>
          <li>Quick Guide</li>
          <li>Software Upgrade</li>
          <li>Popular FAQ</li>
          <li>Contact Us</li>
        </ul>
        <ul class="aboutus">
          <li class="electronics_h1">About  US</li>
          <li>Ours Story</li>
          <li>History</li>
          <li>Culture</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100vw;
  .footerTop {
    width: 100%;
    border-bottom: 1px solid rgb(195, 195, 195);
    .footerTop_text {
      height: 115px;
      padding: 75px 0;
      text-align: center;
      div {
        font-size: 36px;
        font-weight: bold;
      }
      p {
        font-size: 22px;
        margin-top: 45px;
      }
    }
  }
  .footer_contaion {
    padding-top: 84px;
    color: rgb(125, 125, 125);
    text-align: center;
    .footer_contaion_always {
      font-size: 30px;
    }
    .footer_contaion_sign {
      margin: 10px 0 30px 0;
      font-size: 18px;
    }
    .footer_contaion_search {
      height: 68px;
      width: 738px;
      margin: 0 auto;
      display: flex;
      font-size: 30px;
      input {
        width: 549px;
        height: 68px;
        border: 1px solid rgb(125, 125, 125);
        border-right: none;
        outline: none;
        font-size: 30px;
        color: rgb(125, 125, 125);
        box-sizing: border-box;
        padding-left: 25px;
      }
      .footer_contaion_search_btn {
        width: 189px;
        height: 68px;
        color: #ffffff;
        text-align: center;
        line-height: 68px;
        background-color: rgb(125, 125, 125);
      }
    }
    .footer_contaion_img {
      margin: 30px auto;
    }
  }
}
</style>