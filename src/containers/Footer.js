import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.scss'
import cx from 'classnames';

function Footer (){
  return(
    <>
      <div className={styles.footer}>
        <div className={styles.sns_box}>
          <h2 className={styles.title2}>Follow us</h2>
          <div className={styles.sns}>
            <a href="https://medium.com/witch-official" target="_blank" className={cx(styles.sns_img, styles.monogram, styles.textHide)}>monogram</a>
            <a href="https://discord.com/invite/Za2QUQGnfa"  target="_blank" className={cx(styles.sns_img, styles.discord, styles.textHide)}>discord</a>
            <a href="https://twitter.com/witchwitch_sns" target="_blank" className={cx(styles.sns_img, styles.twitter, styles.textHide)}>twitter</a>
            <a href="https://www.instagram.com/witchtoken_official/" target="_blank" className={cx(styles.sns_img, styles.insta, styles.textHide)}>insta</a>
            <a href="https://blog.naver.com/witchwitch_official" target="_blank" className={cx(styles.sns_img, styles.blog, styles.textHide)}>blog</a>
          </div>
        </div>
        <div className={styles.contact}>
          <Link to='/Contact' className={styles.title2}>Contact us</Link>
        </div>
        <p className={styles.copy}>Copyright © 2022 WITCH. All rights reserved.</p>
      </div>    
    </>
  )
}

export default Footer;