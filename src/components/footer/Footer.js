import { Component } from "react";
import { NavLink } from "react-router-dom";
import TodoContext from "../../store/store";
import styles from "./Footer.module.css";

class Footer extends Component {
  static contextType = TodoContext;

  onClearBtnClick() {
    this.context.clear();
  }

  render() {
    return (
      <footer className={styles.footer}>
        <span className={styles.footer__count}>{`${this.context.activeCount} ${
          this.context.activeCount === 1 ? "item left" : "items left"
        }`}</span>
        <ul className={styles.footer__filters}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.selected}` : styles.link
              }
              to="/"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.selected}` : styles.link
              }
              to="/active"
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.selected}` : styles.link
              }
              to="/completed"
            >
              Completed
            </NavLink>
          </li>
        </ul>
        <button
          className={
            this.context.hasCompleted
              ? `${styles.footer__btn_clear} ${styles.active}`
              : styles.footer__btn_clear
          }
          onClick={this.onClearBtnClick.bind(this)}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
