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
        <el-row class="footer_nav_text_top">
          <el-col :span="6" :lg="6" :xs="12" class="uls">
            <li class="electronics_h1">Electronics</li>
            <li>Headphones</li>
            <li>Power Banks</li>
            <li>Chargers</li>
            <li>Smart Watch</li>
          </el-col>
          <el-col :span="6" :lg="6" :xs="12" class="uls">
            <li class="electronics_h1">Cases & Protection</li>
            <li>Apple</li>
            <li>HUAWEI</li>
            <li>SAMSUNG</li>
            <li>Others</li>
          </el-col>
          <el-col :span="6" :lg="6" :xs="12" class="uls">
            <li class="electronics_h1">Support</li>
            <li>Quick Guide</li>
            <li>Software Upgrade</li>
            <li>Popel-colar FAQ</li>
            <li>Contact Us</li>
          </el-col>
          <el-col :span="6" :lg="6" :xs="12" class="uls">
            <li class="electronics_h1">About US</li>
            <li>Ours Story</li>
            <li>History</li>
            <li>Cel-colture</li>
            <li>News</li>
            <li>
              <img src="/imgs/5A13.png" alt />
            </li>
          </el-col>
        </el-row>
        <el-row class="footer_nav_text_bot">
          <el-col :span="24" class="footer_nav_text_bot_left">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Legal</li>
            <li>Site Map</li>
          </el-col>
        </el-row>
      </div>
      <div class="footer_bom">
        <div class="footer_bom_txt">
          <div class="footer_bom_txt_left">
            <span>EN</span>
            <div>English</div>
          </div>
          <div class="footer_bom_txt_ri">&copy; TOZO 2016 ~ 2020. All Rihts Reserved</div>
        </div>
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
  .footerTop {
    width: 100%;
    border-bottom: 1px solid rgb(195, 195, 195);
    .footerTop_text {
      height: 115px;
      padding: 50px 0;
      text-align: center;
      div {
        font-size: 36px;
        font-weight: bold;
      }
      p {
        font-size: 22px;
        margin-top: 35px;
      }
    }
  }
  .footer_contaion {
    height: 300px;
    box-sizing: border-box;
    padding-top: 54px;
    color: rgb(125, 125, 125);
    text-align: center;
    .footer_contaion_always {
      font-size: 34.45px;
    }
    .footer_contaion_sign {
      margin: 10px 0 30px 0;
      font-size: 18.14px;
    }
    .footer_contaion_search {
      height: 51px;
      width: 555px;
      margin: 0 auto;
      display: flex;
      font-size: 22.25px;
      input {
        width: 549px;
        height: 51px;
        border: 1px solid rgb(125, 125, 125);
        border-right: none;
        outline: none;
        font-size: 22.25px;
        color: rgb(125, 125, 125);
        box-sizing: border-box;
        padding-left: 25px;
      }
      .footer_contaion_search_btn {
        width: 189px;
        height: 100%;
        color: #ffffff;
        text-align: center;
        line-height: 51px;
        background-color: rgb(125, 125, 125);
      }
    }
    .footer_contaion_img {
      margin: 22px auto 0;
    }
  }
  .footer_nav {
    height: 424px;
    overflow: hidden;
    width: 100%;
    background-color: rgb(49, 49, 49);
    .footer_nav_text {
      width: 1416px;
      height: 336px;
      margin: 0 auto;
      .footer_nav_text_top {
        color: #fff;
        .uls {
          font-size: 18px;
          margin-top: 36px;
          .electronics_h1 {
            color: #fff;
          }
          li {
            margin-top: 15px;
            color: rgb(187, 187, 187);
          }
          li:nth-child(1){
            margin-top: 0;
          }
        }
      }
      .footer_nav_text_bot {
        margin: 51px 0 20px 0;
        display: flex;
        justify-content: space-between;
        color: #fff;
        .footer_nav_text_bot_left {
          box-sizing: border-box;
          li {
            display: inline-block;
            margin-right: 20px;
            color: rgb(175, 171, 171);
            font-size:13.5px;
            &::after {
              content: " ";
              height: 30px;
              box-sizing: border-box;
              margin-left: 20px;
              border-left: 2px solid rgb(175, 171, 171);
            }
            &:last-child::after {
              display: none;
            }
          }
        
        }
      }
    }
    .footer_bom{
      height: 90px;
      width: 100%;
      background-color: rgb(18, 18, 18);
      .footer_bom_txt{
        width: 1416px;
        height: 90px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footer_bom_txt_left{
          flex: 1;
          span{
            display: inline-block;
            width: 25px;
            height: 25px;
            background-color: rgb(40, 121, 454);
            border-radius: 50%;
            color: #000;
            font-weight: 800;
            text-align: center;
            line-height: 28px;
          }
          div{
            display: inline-block;
            margin-left: 20px;
            font-size: 18px;
            color: rgb(125, 125, 125);
          }
        }
        .footer_bom_txt_ri{
          font-size: 15px;
          flex: 1;
        }
      }
    }
  }
}
</style>