import { menuItemsLeft, menuItemsRight } from '../database/menuItemList';

const DropdownMenu = (props) => {
	return (
		<ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
			{props.items.map((item) => {
				if (item.hasOwnProperty('children')) {
					return (
						<li key={item.title} className="has-children">
							<a href={item.link} className="nav-link">
								{item.title}
							</a>
							<ul className="dropdown">
								{item.children.map((child) => {
									return (
										<li key={child.title}>
											<a href={child.link}>{child.title}</a>
										</li>
									);
								})}
							</ul>
						</li>
					);
				} else {
					return (
						<li key={item.title}>
							<a href={item.link} className="nav-link">
								{item.title}
							</a>
						</li>
					);
				}
			})}
		</ul>
	);
};

const Header = () => {
	return (
		<nav className="unslate_co--site-nav site-nav-target">
			<div className="container">
				<div className="row align-items-center justify-content-between text-left">
					<div className="col-md-5 text-right">
						<DropdownMenu items={menuItemsLeft} />
					</div>
					<div className="site-logo pos-absolute">
						<a href="index.html" className="unslate_co--site-logo">
							Unfold<span>.</span>
						</a>
					</div>
					<div className="col-md-5 text-right text-lg-left">
						<DropdownMenu items={menuItemsRight} />

						<ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
							<li>
								<a href="#" className="js-menu-toggle">
									Menu
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
