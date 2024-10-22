"use client";

import type React from "react";
import { useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import s from "./RootPopover.module.scss";

interface RootPopoverProps {
	trigger: React.ReactNode;
	children: React.ReactNode;
}

const RootPopover = ({ trigger, children }: RootPopoverProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Popover
			isOpen={isOpen}
			onOpenChange={(open) => setIsOpen(open)}
			offset={38}
			showArrow
			classNames={{
				base: [s.base],
				content: [s.content],
				trigger: [s.trigger],
				arrow: [s.arrow],
			}}
		>
			<PopoverTrigger>{trigger}</PopoverTrigger>
			<PopoverContent onClick={() => setIsOpen(false)}>
				{children}
			</PopoverContent>
		</Popover>
	);
};

export default RootPopover;
