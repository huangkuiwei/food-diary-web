<template>
  <div class="home-page">
    <div class="header">
      <img class="logo" src="@/assets/images/pc/home/logo.png" alt="" />

      <ul class="nav">
        <li>首页</li>
        <li>关于我们</li>
        <li>AI助理</li>
        <li>饮食运动</li>
        <li>页面展示</li>
        <li>联系客服：400-0000-0000</li>
      </ul>
    </div>

    <div class="banner">
      <img src="@/assets/images/pc/home/banner.png" alt="" />
    </div>

    <div class="introduce">
      <img class="bg" src="@/assets/images/pc/home/introduce-bg.png" alt="" />

      <div class="content">
        <div class="title">您的专属体重管理助手</div>
        <div class="sub-title">体重管理 就用慧食搭子</div>
        <div class="tip">
          无论您的目标是科学减重、健康增肌，还是维持理想体型，我们都能为您提供个性化支持。
          <br />
          通过智能记录每日饮食、运动及体重变化，结合专业算法生成数据分析，助您轻松掌握身体趋势。
        </div>
        <div class="img-list">
          <img src="@/assets/images/pc/home/introduce1.png" alt="" />
          <img src="@/assets/images/pc/home/introduce2.png" alt="" />
          <img src="@/assets/images/pc/home/introduce3.png" alt="" />
          <img src="@/assets/images/pc/home/introduce4.png" alt="" />
        </div>
      </div>
    </div>

    <div class="introduce2">
      <img src="@/assets/images/pc/home/introduce-bg2.png" alt="" />
    </div>

    <div class="introduce3">
      <div class="item1">
        <div class="introduce-text">
          <span>饮食推荐</span>
          <span>
            拥有食物数据库，囊括了基础食材及食品的营养成分信息。同时还可提供营养、数据工具等，使用食物查询、营养分析、健康食谱定制等功能。
          </span>
        </div>
        <img src="@/assets/images/pc/home/introduce5.png" alt="" />
      </div>

      <div class="item2">
        <img src="@/assets/images/pc/home/introduce6.png" alt="" />
        <div class="introduce-text">
          <span>运动记录</span>
          <span>运动实时记录，统计热量消耗生成数据表，每日、每月 数据一目了然。</span>
        </div>
      </div>
    </div>

    <div class="introduce4">
      <div class="introduce-title">
        <div class="title"><span>慧食搭子</span>小程序页面展示</div>
        <div class="sub-title">
          多元化产品和服务 致力于为用户提供花费更少、体验更优的科学减肥解决方案
        </div>
      </div>

      <div class="img-list">
        <img class="bg" src="@/assets/images/pc/home/introduce-bg3.png" alt="" />
        <div class="content">
          <div class="item">
            <div class="title">数据报告</div>
            <div class="tip">每周、每月数据统计一目了然</div>
            <img src="@/assets/images/pc/home/mobile-icon1.png" alt="" />
          </div>

          <div class="item">
            <div class="title">记录</div>
            <div class="tip">每日饮食运动打卡记录</div>
            <img src="@/assets/images/pc/home/mobile-icon2.png" alt="" />
          </div>

          <div class="item">
            <div class="title">体重管理方案</div>
            <div class="tip">为您定制合适的体重方案</div>
            <img src="@/assets/images/pc/home/mobile-icon3.png" alt="" />
          </div>

          <div class="item">
            <div class="title">健康助手</div>
            <div class="tip">为您的健康生活保驾护航</div>
            <img src="@/assets/images/pc/home/mobile-icon4.png" alt="" />
          </div>

          <div class="item">
            <div class="title">AI助理</div>
            <div class="tip">为您答疑解惑</div>
            <img src="@/assets/images/pc/home/mobile-icon5.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="logo">
        <img src="@/assets/images/pc/home/logo2.png" alt="" />

        <div>
          <span>慧食搭子</span>
          <span>记录美好生活</span>
        </div>
      </div>

      <div class="qr-code">
        <img src="@/assets/images/pc/home/qrcode.png" alt="" />

        <div>
          <span>扫描关注公众号</span>
          <span>了解更多</span>
        </div>
      </div>

      <div class="contact">
        <div style="margin-bottom: 34px">联系我们</div>
        <div style="margin-bottom: 20px">公司名称：广州泰湖科技有限公司</div>
        <div>电话：400-0000-0000</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.home-page {
  > .header {
    height: 80px;
    padding: 0 13.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .logo {
      height: 56px;
    }

    > .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 47px;
      font-weight: 500;
      font-size: 18px;
      color: #111111;
    }
  }

  > .banner,
  .introduce2 {
    > img {
      width: 100%;
    }
  }

  > .introduce {
    position: relative;

    > .bg {
      width: 100%;
    }

    > .content {
      position: absolute;
      left: 13.5%;
      right: 13.5%;
      top: 110px;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > .title {
        font-size: 26px;
        color: #333333;
        margin-bottom: 2%;
      }

      > .sub-title {
        font-weight: bold;
        font-size: 40px;
        color: #0abf92;
        margin-bottom: 2%;
      }

      > .tip {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
        margin-bottom: 5%;
      }

      > .img-list {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > img {
          width: 23%;
        }
      }
    }
  }

  > .introduce3 {
    padding: 105px 16.1%;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
    gap: 87px;

    > .item1,
    .item2 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .introduce-text {
        width: 37%;
        display: flex;
        flex-direction: column;

        > span {
          &:nth-child(1) {
            font-weight: 500;
            font-size: 48px;
            color: #000000;
            margin-bottom: 60px;
          }

          &:nth-child(2) {
            font-size: 18px;
            color: #666666;
            line-height: 30px;
          }
        }
      }

      > img {
        width: 55%;
      }
    }
  }

  > .introduce4 {
    position: relative;
    padding: 77px 0 35px;

    > .introduce-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 60px;

      > .title {
        font-weight: bold;
        font-size: 40px;
        color: #111111;
        margin-bottom: 20px;

        > span {
          color: #10b48c;
        }
      }

      > .sub-title {
        font-weight: 500;
        font-size: 18px;
        color: #111111;
      }
    }

    > .img-list {
      position: relative;

      > .bg {
        width: 100%;
        display: block;
      }

      > .content {
        position: absolute;
        left: 77px;
        right: 77px;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;

        > .item {
          align-self: stretch;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            background: #08bd94;
            transition: 0.3s;
          }

          > .title {
            font-weight: bold;
            font-size: 22px;
            color: #ffffff;
            margin-bottom: 10px;
          }

          > .tip {
            font-size: 16px;
            color: #ffffff60;
            margin-bottom: 30px;
          }

          > img {
            width: 68%;

            &:hover {
              transform: scale(1.05);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }

  > .footer {
    background: #000000;
    padding: 0 15%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;

    > .logo,
    .qr-code {
      display: flex;
      align-items: center;

      &.logo {
        margin-right: 105px;
      }

      &.qr-code {
        flex-grow: 1;
      }

      > img {
        width: 115px;
        margin-right: 19px;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 22px;
        color: #ffffff;
      }
    }

    > .contact {
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>
