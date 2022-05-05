import React from "react"
import "./Footer.css"

function Footer() {
	return <footer className="Footer">

		<div class="content">
			<div class="top">
				<div class="logo-details">
					<span class="logo_name">Sitesoch</span>
				</div>
				<div class="media-icons">
					<a href="#"><i class="fa-brands fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
			<div class="link-boxes">
				<ul class="box">
					<li class="link_name">1</li>
					<li><a href="#">Центр поддержки</a></li>
					<li><a href="#">Конфиденциальность</a></li>
					<li><a href="#">Настройки файлов cookie</a></li>
					<li><a href="#">Юридические уведомления</a></li>

				</ul>
				<ul class="box">
					<li class="link_name">2</li>
					<li><a href="#">Способы просмотра</a></li>
					<li><a href="#">Корпоративная информация</a></li>
					<li><a href="#">Медиацентр</a></li>
					<li><a href="#">Правила использования</a></li>

				</ul>
				<ul class="box">
					<li class="link_name">3</li>
					<li><a href="#">Распространенные вопросы</a></li>
					<li><a href="#">Аккаунт</a></li>
					<li><a href="#">Свяжитесь с нами</a></li>
					<li><a href="#">Только на Bkino</a></li>

				</ul>
				<ul class="box">
					<li class="link_name">Котакты</li>
					<li><a href="#">+91 8879887262</a></li>
					<li><a href="#">+91 8879887262</a></li>
					<li><a href="#">Bkino@movies.com</a></li>


				</ul>




			</div>
		</div>

	</footer>
}

export default Footer;