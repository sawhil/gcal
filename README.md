# Calendar Application

This is a calendar application built with React and Vite, utilizing FullCalendar for event management. The application allows users to create, view, and manage events with various functionalities, including color coding and drag-and-drop capabilities.

## Features

- **Event Creation**: Users can create new events with a title, description, start and end times, and color coding.
- **Color-Coded Events**: Events can be assigned different colors for better visual categorization.
- **Drag and Resize Events**: Users can drag events to different time slots or resize them to adjust their duration.
- **Validation**: The application prevents the creation of invalid events, such as those without a title or with a start time that is later than the end time.
- **Event Filtering**: Users can filter events based on their color using a dropdown menu.

## State Management with Jotai

This application uses **Jotai** for state management, which provides a simple and flexible way to manage global state in React applications. Jotai allows for atomic state management, meaning that each piece of state can be managed independently, leading to better performance and easier debugging.

### Benefits of Using Jotai

- **Simplicity**: Jotai's API is straightforward, making it easy to understand and use.
- **Performance**: Jotai optimizes re-renders by allowing components to subscribe only to the specific atoms they need.
- **Local Storage Persistence**: The application uses Jotai alongside local storage to persist events. This means that even if the user refreshes the page, their events will remain intact.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
yarn
```

Then, you can run the application in development mode:

```bash
yarn dev
```

## Improvements

While the application is functional, there are several areas for improvement:

- **Better UI**: Enhancing the user interface for a more intuitive and visually appealing experience.
- **Edit Functionality**: Implementing the ability to edit existing events.
- **Multi-User Support**: Allowing multiple users to manage their events, potentially with user authentication.

## Conclusion

This calendar application demonstrates the capabilities of React, Vite, and Jotai in building a responsive and user-friendly event management tool. With further improvements, it can evolve into a more robust solution for managing personal or team schedules.
