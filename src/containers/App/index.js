import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

export default function witchApp(props){
  
  return(
    <>
      <header id="header">
        <div class="container">
          <div class="row">
            <div class="logo-box">
              <img class="logo-img-left" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/simbol.png" alt="logo image"/>
              <img class="logo-img-right" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/logo_text.png" alt="logo image"/>
            </div>
            <div class="btn-box">
              <a class="btn-pc" href="https://apps.apple.com/app/%EC%9C%84%EC%B9%98%EC%9C%84%EC%B9%98/id1535324951" target="new">
                <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/h-app_store.png" alt="app store button" />
              </a>
              <a class="btn-pc" href="https://play.google.com/store/apps/details?id=com.seasons.witchwitch" target="new">
                <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/h-google_play.png" alt="google play button" />
              </a>
              <a class="btn-mobile"></a>
            </div>
          </div>
        </div>
        <hr />
    </header>
    <section id="home">
      <div class="home-container">
        <div class="top-text"><span>그냥 걷고, 쉽게 얻고 편하게 써요</span></div>
        <div class="logo-text-img"><img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/logo_text.png" alt="witchwitch" /></div>
        <div class="btn-box">
          <a class="btn-pc" href="https://apps.apple.com/app/%EC%9C%84%EC%B9%98%EC%9C%84%EC%B9%98/id1535324951" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/app_store.png" alt="app store button" />
          </a>
          <a class="btn-pc" href="https://play.google.com/store/apps/details?id=com.seasons.witchwitch" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/google_play.png" alt="google play button" />
          </a>
          <a class="btn-mobile" href="https://apps.apple.com/app/%EC%9C%84%EC%B9%98%EC%9C%84%EC%B9%98/id1535324951" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/app_store.png" alt="mobile app store button" />
          </a>
          <a class="btn-mobile" href="https://play.google.com/store/apps/details?id=com.seasons.witchwitch" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/google_play.png" alt="mobile google play button" />
          </a>
        </div>
      </div>
    </section>
    <section id="service">
      <div class="service-container">
          <div class="image-area tab-content">
            <img class="case-1 tab-pane active" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/phone_1.png" />
            <img class="case-2 tab-pane fade" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/phone_2.png" />
            <img class="case-3 tab-pane fade" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/phone_4.png" />
          </div>
          <div class="text-area">
            <div class="title">위치의 진정한 가치<br /> 위치월드에서 찾다</div>
            <ul class="tabs nav nav-pills" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href=".case-1">토큰 획득<hr /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href=".case-2">토큰 사용<hr /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href=".case-3">1:1 채팅<hr /></a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="case-1 tab-pane active">
                <span>지금 위치위치를 실행하고 주변의 코인을 가져가세요!</span>
              </div>
              <div class="case-2 tab-pane fade">
                <span>가맹점에 방문하여 QE코드를 스캔하면 결제・적립・할인 서비스를 원스톱으로 이용할 수 있어요</span>
              </div>
              <div class="case-3 tab-pane fade">
                <span>친구 플레이어에게 위치토큰으로 구매한 기프티콘을 선물할 수 있어요</span>
              </div>
            </div>
          </div>
      </div>

      <div class="bottom-content">
        앱 다운로드
        <div class="btn-box">
          <a class="btn-mobile" href="https://apps.apple.com/app/%EC%9C%84%EC%B9%98%EC%9C%84%EC%B9%98/id1535324951" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/m-app_store.png" alt="mobile app store button" />
          </a>
          <a class="btn-mobile" href="https://play.google.com/store/apps/details?id=com.seasons.witchwitch" target="new">
            <img src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/m-google_play.png" alt="mobile google play button" />
          </a>
        </div>
      </div>
    </section>
    <footer id="footer">
      <div class="row">
          <div class="footer-logo-img">
            <img class="logo-img-left" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/simbol.png" alt="logo image" />
            <img class="logo-img-right" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/logo_text_white.png" alt="logo image" />
          </div>
          <div class="policy">
            <p>
              <a href="https://drive.google.com/file/d/1bmN7POieOJk9Ta_tVl-xojjGHbOKqU1V/view" target="_blank">한글백서</a>
              <a href="/contact" class="home" target="_blank">Contact Us</a>
            </p>
          </div>
      </div>
      <hr />
      <div class="info">
          <div class="copyright">Copyright © 2021 SEASONS Corp. All rights reserved.</div>
          <div><img class="social-img" src="https://witchwitch.s3.ap-northeast-2.amazonaws.com/images/social.png" alt="social image" /></div>
      </div>
    </footer>
    <InnerHTML html={`<style>html, html *, body, body * { cursor: default }</style>`} />
    <InnerHTML html={`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`} />
    <InnerHTML html={`<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>`} />
    <InnerHTML html={`<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>`} />
    <InnerHTML html={`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">`} />
    <InnerHTML html={`<link rel="stylesheet" href="https://witchwitch.s3.ap-northeast-2.amazonaws.com/css/mStyles.css">`} />
    <InnerHTML html={`<link rel="stylesheet" type="text/css" href="https://witchwitch.s3.ap-northeast-2.amazonaws.com/css/styles.css" />`} />
    </>
  )
}