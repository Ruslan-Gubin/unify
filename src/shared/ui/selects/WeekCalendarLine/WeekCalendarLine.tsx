"use client";
import { useMemo, useState } from "react";
import { CalendarArrowIcon } from "./svg/CalendarArrowIcon";
import styles from "./WeekCalendarLine.module.css";

const getWeekDays = (startDate: Date) => {
	const dates: Date[] = [];

	for (let i = 0; i < 7; i++) {
		const newDate = new Date(startDate);
		newDate.setDate(startDate.getDate() + i);
		dates.push(newDate);
	}

	return dates;
};

export const WeekCalendarLine = () => {
	const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
	const [rangeDate, setRangeDate] = useState<Date[]>(() =>
		getWeekDays(new Date()),
	);
	const todayDate = useMemo(() => new Date(), []);
	const formatMount = new Intl.DateTimeFormat("ru", {
		month: "long",
	});

	const weekList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

	const handleChangeDate = (date: Date) => setCurrentDate(() => date);

	const handlePrevDate = () => {
		const startDate = rangeDate[0];
		startDate.setDate(startDate.getDate() - 1);
		setRangeDate(getWeekDays(startDate));
	};

	const handleNextDate = () => {
		const startDate = rangeDate[0];
		startDate.setDate(startDate.getDate() + 1);
		setRangeDate(getWeekDays(startDate));
	};

	const checkIsToday = (date: Date): boolean =>
		date.toLocaleDateString() === todayDate.toLocaleDateString();

	const getInfoPanelClass = (date: Date) => {
		const classRoot = [styles.calendarItem];

		if (checkIsToday(date)) {
			classRoot.push(styles.calendarItemActive);
		}

		if (date.toLocaleDateString() === currentDate.toLocaleDateString()) {
			classRoot.push(styles.selectDate);
		}

		return classRoot.join(" ");
	};

	return (
		<div className={styles.root}>
			<div className={styles.mount}>
				{formatMount.format(currentDate)} {currentDate.getFullYear()}
			</div>

			<section className={styles.calendar}>
				<button type="button" onClick={handlePrevDate}>
					<CalendarArrowIcon direction="left" />
				</button>
				<ul className={styles.calendarList}>
					{rangeDate.map((item) => (
						<li key={item.toString()}>
							<button
								className={getInfoPanelClass(item)}
								type="button"
								onClick={() => handleChangeDate(item)}
							>
								<span className={styles.calendarDay}>
									{weekList[item.getDay() - 1] ?? "Вс"}
								</span>
								<span className={styles.calendarNumber}>{item.getDate()}</span>
							</button>
						</li>
					))}
				</ul>
				<button type="button" onClick={handleNextDate}>
					<CalendarArrowIcon direction="right" />
				</button>
			</section>
		</div>
	);
};
