import React, { useRef, useEffect, useReducer } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import classes from "./Header.module.css";
import CartIcon from "../icons/cart-icon";
import FavoriteIcon from "../icons/favorite-icon";
import UserIcon from "../icons/user-icon";
import MobileMenuIcon from "../icons/mobile-menu-icon";
import { reducer } from "next/dist/client/components/reducer";

const Header = () => {
  const path = usePathname();
  const links = [
    { path: "/", text: "Trang chủ" },
    { path: "/products", text: "Sản phẩm" },
    { path: "/cart", text: "Giỏ hàng" },
    { path: "/blog", text: "Tin tức" },
    { path: "/contact", text: "Liên hệ" },
  ];
  // hidden navbar then show navbar out when scrolling
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        headerRef.current?.classList.add(`${classes.stickyHeader}`); // null handling
      } else {
        headerRef.current?.classList.remove(`${classes.stickyHeader}`);
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();

    // return to clean up function
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuRef = useRef(null);
  const menuToggle = () =>
    menuRef.current.classList.toggle(`${classes.activeMenu}`);

  const initialValue = 0;
  const [stateCount, dispatch] = useReducer(reducer, initialValue);

  return (
    <header className={classes.header} ref={headerRef}>
      {/* <header className={classes.header}> */}
      <Container>
        <Row>
          <div className={classes.navWrapper}>
            <motion.div whileTap={{ scale: 0.6 }} className={classes.logo}>
              <Link href="/">
                <Image
                  src="/images/logos/bnsc.png"
                  width={160}
                  height={54}
                  priority={true}
                  alt="logo"
                />
              </Link>
            </motion.div>
            <div
              className={classes.navigation}
              ref={menuRef}
              onClick={menuToggle}
            >
              <ul className={classes.menu}>
                {links.map((menuItem) => (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    className={classes.navItem}
                    key={menuItem.path}
                  >
                    <Link
                      className={`${
                        menuItem.path === path ? `${classes.navItemActive}` : ""
                      }`}
                      href={menuItem.path}
                    >
                      {menuItem.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className={classes.navIcon}>
              <motion.span
                whileTap={{ scale: 0.6 }}
                className={classes.favoriteIcon}
              >
                <FavoriteIcon />
                <span className={classes.badge}>2</span>
              </motion.span>
              <motion.span
                whileTap={{ scale: 0.6 }}
                className={classes.cartIcon}
              >
                <Link href={"/cart"}>
                  <CartIcon />
                <span className={classes.badge}>2</span>
                </Link>
              </motion.span>
              <motion.span
                whileTap={{ scale: 0.6 }}
                className={classes.userIcon}
              >
                <UserIcon />
              </motion.span>
              <motion.div
                whileTap={{ scale: 0.6 }}
                className={classes.mobileMenu}
                onClick={menuToggle}
              >
                <span>
                  <MobileMenuIcon />
                </span>
              </motion.div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
