import { useEffect } from "react";
import { ArrowIcon, CloseIcon, NotificationIcon } from "../../../svg";

export default function Notifications({
  onRequestNotifications,
  setShowNotifications,
}) {
  const handleNotificationClick = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Notifications enabled!", {
          body: "You will now receive desktop notifications.",
        });
        onRequestNotifications(); 
      } else {
        alert("Notifications permission denied.");
      }
    } else {
      alert("Your browser does not support desktop notifications.");
    }
  };

  return (
    <div className="h-[90px] dark:bg-dark_bg_3 flex items-center p-[13px]">
      {/* Container */}
      <div className="flex items-center justify-between w-full">
        {/* Left */}
        <div className="flex items-center gap-x-4">
          <div className="cursor-pointer">
            <NotificationIcon className="dark:fill-blue_1" />
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={handleNotificationClick}
          >
            <span className="textPrimary">Get notified of new messages</span>
            <span className="textSecondary mt-0.5 flex items-center gap-0.5">
              Turn on desktop notifications
              <ArrowIcon className="mt-1 dark:fill-dark_svg_2" />
            </span>
          </div>
        </div>
        {/* Right */}
        <div
          className="cursor-pointer"
          onClick={() => setShowNotifications(false)}
        >
          <CloseIcon className="dark:fill-dark_svg_2" />
        </div>
      </div>
    </div>
  );
}
