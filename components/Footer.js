export default function Footer() {
  return (
    <footer className="footer">
			<div className="footer__container">
				<div className="footer__wrapper">
					<a href="https://github.com/tituan" target="_blank" className="footer__wrapper__link"><i className="fa-brands fa-github"></i></a>
					<a href="https://www.linkedin.com/in/antoine-boisard-216a0741/" className="footer__wrapper__link"><i className="fa-brands fa-linkedin" ></i></a>
				</div>
				<div className="footer__wrapper footer__wrapper--alt">
					<a href="mailto:antoine.boisard8@gmail.com" className="footer__wrapper__link"><i className="fa-solid fa-envelope"></i></a>
					<p className="footer__wrapper__link">
					  <span className="footer__wrapper__link__text">Antoine Boisard 2023 <sup>&copy;</sup></span>
					</p>
					<span className="footer__wrapper__arrowTop goTop">
						{/* <svg className="icon">
							<use xlink:href="#icon-arrow-down"></use>
						</svg> */}
					</span>
				</div>
			</div>
		</footer>
  );
}