import { useState } from "react";

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "New User Registration",
      message: "John Doe has registered as a new customer",
      type: "info",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "System Update",
      message: "System maintenance scheduled for tomorrow at 2:00 PM",
      type: "warning",
      time: "5 hours ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Order Completed",
      message: "Order #12345 has been successfully delivered",
      type: "success",
      time: "1 day ago",
      isRead: true,
    },
  ]);

  const getNotificationIcon = (type: any) => {
    switch (type) {
      case "info":
        return (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        );
      case "success":
        return (
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
      </div>

      <div className="space-y-4 max-w-3xl">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border rounded-lg flex items-start gap-4 ${
              notification.isRead ? "bg-white" : "bg-blue-50"
            }`}
          >
            {getNotificationIcon(notification.type)}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">
                  {notification.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {notification.time}
                </span>
              </div>
              <p className="text-gray-600 mt-1">{notification.message}</p>
            </div>
            {!notification.isRead && (
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
          Clear all notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;
