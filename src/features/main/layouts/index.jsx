import styles from "features/main/layouts/main-layout.module.css";
import TopNav from "components/organisms/navs/top";
import LeftSideNav from "components/organisms/navs/left";
import RightSideNav from "components/organisms/navs/right";
import useMainLayoutPresenter from "../hooks/useMainLayoutPresenter";
import LeftSideFlyout from "components/molecules/flyouts/left";
import RightSideFlyout from "components/molecules/flyouts/right";

export default function MainLayout({ children }) {
  const {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    toggleLeftSidebar,
    toggleRightSidebar,
  } = useMainLayoutPresenter();

  console.log({ isLeftSidebarOpen, isRightSidebarOpen });

  return (
    <div className={styles.mainlayout}>
      <TopNav />
      <div id="row-2" className={styles.maincontainer}>
        {/* if sidebar is open hide nav, else show flyout */}
        {!isLeftSidebarOpen && <LeftSideNav toggleOpen={toggleLeftSidebar} />}
        {isLeftSidebarOpen && <LeftSideFlyout toggleOpen={toggleLeftSidebar} />}
        <main>{children}</main>
        {!isRightSidebarOpen && (
          <RightSideNav toggleOpen={toggleRightSidebar} />
        )}
        {isRightSidebarOpen && <RightSideFlyout />}
      </div>
    </div>
  );
}
