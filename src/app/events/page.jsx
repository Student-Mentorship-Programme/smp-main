import React from 'react';
import styles from "../page.module.css";
import EventsPage from "@components/pages/events/page"

export const metadata = {
    title: 'Events',
    description: 'SMP - Events',
}

const Events = () => {
    return (
        <EventsPage />
    );
}

export default Events;