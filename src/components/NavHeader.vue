<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript;">小米商城</a>
          <a href="javascript;">MUI</a>
          <a href="javascript;">云服务</a>
          <a href="javascript;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript;">登陆</a>
          <a href="javascript;">注册</a>
          <a href="javascript;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu" @mouseenter="getProductList()">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in productXiaoMi" :key="item.id">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.img"
                        alt
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.product}}</div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
  data(){
    return{
      productXiaoMi:[]
    }
  },
  methods:{
    getProductList(){
      this.$axios.get('products/10012').then(res=>{
        this.productXiaoMi = res 
      })
    }
  }
};
</script>

<style lang="scss" >
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background: $colorA;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 11px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      .header-logo {
        width: 55px;
        height: 55px;
        overflow: hidden;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: margin 0.2s;
          }
          &::after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
            background-size: contain;
          }
          &:hover::before {
            margin-left: -55px;
          }
        }
      }
      .header-menu {
        padding-left: 209px;
        width: 643px;
        display: flex;
        align-items: center;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            height: 0;
            opacity: 0;
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            overflow: hidden;
            box-sizing: border-box;
            .product {
              float: left;
              width: 20%;
              height: 220px;
              line-height: 22px;
              text-align: center;
              position: relative;
              &::before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
              }
              &:last-child::before{
                display: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  height: 117px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 30px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }

              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            width: 264px;
            height: 50px;
            border: none;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>