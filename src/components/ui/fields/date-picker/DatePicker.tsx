"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { format, isValid, parse } from "date-fns";
import { DayPicker, type DateRange } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

import CalendarIcon from "@/components/icons/calendar/CalendarIcon";
import useClickOutside from "@/hooks/other/useClickOutside";
import type { DatePickerProps } from "@/types/form/datePicker";

import s from "./DatePicker.module.scss";

import RootButton from "../../buttons/root/RootButton";
import InputWrapper from "../components/wrapper/InputWrapper";
import Input from "../input/Input";

const DatePicker = forwardRef<HTMLLabelElement, DatePickerProps>(
	(
		{
			errorMessage,
			label,
			isRequired,
			config,
			isModal = true,
			isCloseModalAfterSelect = true,
			withInput = true,
			modalPosition = "bottom",
		},
		ref
	) => {
		const [month, setMonth] = useState(
			config.mode === "single" && config.singleValue
				? new Date(config.singleValue)
				: config.mode === "range" && config.rangeValue && config.rangeValue.from
					? config.rangeValue.from
					: new Date()
		);

		const [isOpen, setIsOpen] = useState(false);

		const closeModal = () => {
			setIsOpen(false);
		};

		const wrapRef = useRef<HTMLDivElement>(null);

		useClickOutside({
			elementRefs: [wrapRef],
			isOpen: isOpen,
			onClose: closeModal,
		});

		const [inputValue, setInputValue] = useState(
			config.mode === "single" && config.singleValue
				? format(config.singleValue, "dd.MM.yyyy")
				: ""
		);

		const [inputFromValue, setInputFromValue] = useState(
			config.mode === "range" && config.rangeValue && config.rangeValue.from
				? format(config.rangeValue.from, "dd.MM.yyyy")
				: ""
		);

		const [inputToValue, setInputToValue] = useState(
			config.mode === "range" && config.rangeValue && config.rangeValue.to
				? format(config.rangeValue.to, "dd.MM.yyyy")
				: ""
		);

		useEffect(() => {
			if (config.mode === "single") {
				if (config.singleValue) {
					const formattedValue = format(config.singleValue, "dd.MM.yyyy");
					if (formattedValue !== inputValue) {
						setInputValue(formattedValue);
					}
				} else {
					setInputValue("");
				}
			}

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [config]);

		const handleDayPickerSelect = (date: Date | undefined) => {
			if (config.mode === "single") {
				if (!date) {
					setInputValue("");
					config.singleOnChange("");
				} else {
					config.singleOnChange(date);
					// setMonth(date);
					setInputValue(format(date, "dd.MM.yyyy"));
				}
			}

			if (isCloseModalAfterSelect) {
				closeModal();
			}
		};

		const handleDayPickerRangeSelect = (value: DateRange | undefined) => {
			console.log(value);

			if (config.mode === "range") {
				if (!value) {
					setInputValue("");
					config.rangeOnChange("");
				} else {
					config.rangeOnChange(value);
					// if (value.from) {
					// 	setMonth(value.from);
					// }
					setInputFromValue(value.from ? format(value.from, "dd.MM.yyyy") : "");
					setInputToValue(value.to ? format(value.to, "dd.MM.yyyy") : "");
					// setInputValue(format(date, "dd.MM.yyyy"));
				}
			}

			if (isCloseModalAfterSelect) {
				closeModal();
			}
		};

		const handleInputChange = (value: string, range?: "from" | "to") => {
			// if (config.mode === "single") {

			switch (range) {
				case "from":
					setInputFromValue(value);
					break;
				case "to":
					setInputToValue(value);
					break;
				default:
					setInputValue(value);
					break;
			}

			if (value.length === 10) {
				const parsedDate = parse(value, "dd.MM.yyyy", new Date());

				if (isValid(parsedDate)) {
					if (config.mode === "single") {
						config.singleOnChange(parsedDate);
						setMonth(parsedDate);
					}

					if (config.mode === "range" && range === "from") {
						if (
							config.rangeValue &&
							config.rangeValue.to &&
							parsedDate.getTime() > config.rangeValue.to.getTime()
						) {
							config.rangeOnChange({
								from: config.rangeValue ? config.rangeValue.to : undefined,
								to: parsedDate,
							});
							setInputFromValue(format(config.rangeValue.to, "dd.MM.yyyy"));
							setInputToValue(value);
						} else {
							config.rangeOnChange({
								from: parsedDate,
								to: config.rangeValue ? config.rangeValue.to : undefined,
							});
						}

						setMonth(parsedDate);
					}

					if (config.mode === "range" && range === "to") {
						if (
							config.rangeValue &&
							config.rangeValue.from &&
							parsedDate.getTime() < config.rangeValue.from.getTime()
						) {
							console.log("aaaaaa");

							config.rangeOnChange({
								from: parsedDate,
								to: config.rangeValue ? config.rangeValue.from : undefined,
							});
							setInputFromValue(value);
							setInputToValue(format(config.rangeValue.from, "dd.MM.yyyy"));
						} else {
							config.rangeOnChange({
								from: config.rangeValue ? config.rangeValue.from : undefined,
								to: parsedDate,
							});
						}

						setMonth(parsedDate);
					}
				} else {
					if (config.mode === "single") {
						config.singleOnChange("");
					}

					if (config.mode === "range" && range === "from") {
						config.rangeOnChange("");
					}

					if (config.mode === "range" && range === "to") {
						config.rangeOnChange("");
					}
				}
			} else if (!value.length) {
				if (config.mode === "single") {
					config.singleOnChange("");
				}

				if (config.mode === "range" && range === "from") {
					config.rangeOnChange("");
				}

				if (config.mode === "range" && range === "to") {
					config.rangeOnChange("");
				}
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const autoCorrectedDatePipe =
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			createAutoCorrectedDatePipe("dd.mm.yyyy HH:MM");

		return (
			<div className={s.block}>
				<InputWrapper
					errorMessage={errorMessage}
					label={label}
					isRequired={isRequired}
				>
					<div ref={wrapRef} className={clsx(s.wrap, withInput && s.withInput)}>
						{!withInput && isModal && (
							<div className={s.buttons}>
								<RootButton
									onClick={() => setIsOpen(!isOpen)}
									type="button"
									size="sm"
								>
									<CalendarIcon />
								</RootButton>
							</div>
						)}
						<div className={clsx(s.inputWrap, !withInput && s.hidden)}>
							{config.mode === "single" && (
								<Input
									ref={ref}
									value={inputValue}
									placeholder="dd.мм.yyyy"
									mask={[
										/\d/,
										/\d/,
										".",
										/\d/,
										/\d/,
										".",
										/\d/,
										/\d/,
										/\d/,
										/\d/,
									]}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
									pipe={autoCorrectedDatePipe}
									onChange={handleInputChange}
									onLabelFocus={() => setIsOpen(true)}
									onOpenCalendar={() => setIsOpen(true)}
									// onLabelBlur={() => setIsOpen(false)}
								/>
							)}
							{config.mode === "range" && (
								<>
									<Input
										ref={ref}
										value={inputFromValue}
										placeholder="dd.мм.yyyy"
										mask={[
											/\d/,
											/\d/,
											".",
											/\d/,
											/\d/,
											".",
											/\d/,
											/\d/,
											/\d/,
											/\d/,
										]}
										// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
										pipe={autoCorrectedDatePipe}
										onChange={(e) => handleInputChange(e, "from")}
										onLabelFocus={() => setIsOpen(true)}
										onOpenCalendar={() => setIsOpen(true)}
										// onLabelBlur={() => setIsOpen(false)}
									/>
									<Input
										value={inputToValue}
										placeholder="dd.мм.yyyy"
										mask={[
											/\d/,
											/\d/,
											".",
											/\d/,
											/\d/,
											".",
											/\d/,
											/\d/,
											/\d/,
											/\d/,
										]}
										// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
										pipe={autoCorrectedDatePipe}
										onChange={(e) => handleInputChange(e, "to")}
										onLabelFocus={() => setIsOpen(true)}
										onOpenCalendar={() => setIsOpen(true)}
										// onLabelBlur={() => setIsOpen(false)}
									/>
								</>
							)}
						</div>

						<div
							className={clsx(
								s.picker,
								isModal && s.modal,
								isOpen && s.open,
								s[modalPosition]
							)}
						>
							{config.mode === "single" && (
								<DayPicker
									locale={ru}
									mode={config.mode}
									month={month}
									onMonthChange={setMonth}
									selected={
										config.singleValue
											? new Date(config.singleValue)
											: undefined
									}
									onSelect={handleDayPickerSelect}
								/>
							)}
							{config.mode === "range" && (
								<DayPicker
									locale={ru}
									mode={config.mode}
									month={month}
									onMonthChange={setMonth}
									selected={config.rangeValue ? config.rangeValue : undefined}
									onSelect={handleDayPickerRangeSelect}
								/>
							)}
						</div>
					</div>
				</InputWrapper>
			</div>
		);
	}
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
