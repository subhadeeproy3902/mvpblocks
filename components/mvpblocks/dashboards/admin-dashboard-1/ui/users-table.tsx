"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Calendar, Mail, MapPin, MoreHorizontal } from "lucide-react";
import Image from "next/image";

const users = [
	{
		id: 1,
		name: "Alex Johnson",
		email: "alex@example.com",
		avatar: "/assets/avatars/avatar-1.webp",
		role: "Admin",
		status: "active",
		joinDate: "2024-01-15",
		location: "New York, US",
	},
	{
		id: 2,
		name: "Sarah Chen",
		email: "sarah@example.com",
		avatar: "/assets/avatars/avatar-2.webp",
		role: "User",
		status: "active",
		joinDate: "2024-02-20",
		location: "San Francisco, US",
	},
	{
		id: 3,
		name: "Michael Brown",
		email: "michael@example.com",
		avatar: "/assets/avatars/avatar-3.webp",
		role: "Moderator",
		status: "inactive",
		joinDate: "2024-01-08",
		location: "London, UK",
	},
];

interface UsersTableProps {
	onAddUser: () => void;
}

export const UsersTable = memo(({ onAddUser }: UsersTableProps) => {
	return (
		<div className="bg-card/40 border border-border rounded-xl p-3 sm:p-6">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
				<div>
					<h3 className="text-lg sm:text-xl font-semibold">Recent Users</h3>
					<p className="text-sm text-muted-foreground">
						Latest user registrations and activity
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 text-sm text-green-500">
						<TrendingUp className="w-4 h-4" />
						<span>+12%</span>
					</div>
					<Button variant="outline" size="sm" onClick={onAddUser}>
						<Plus className="w-4 h-4 mr-2" />
						<span className="hidden sm:inline">Add User</span>
						<span className="sm:hidden">Add</span>
					</Button>
				</div>
			</div>

			<div className="space-y-2">
				{users.map((user, index) => (
					<motion.div
						key={user.id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.05 }}
						className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
					>
						<div className="flex items-center gap-4 w-full sm:w-auto">
							<div className="relative">
								<Image
									src={user.avatar}
									alt={user.name}
									width={40}
									height={40}
									className="rounded-full"
								/>
								<div
									className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
										user.status === "active"
											? "bg-green-500"
											: "bg-red-500"
									}`}
								/>
							</div>

							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 flex-wrap">
									<h4 className="font-medium text-sm truncate">
										{user.name}
									</h4>
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${
											user.role === "Admin"
												? "bg-purple-500/10 text-purple-500"
												: user.role === "Moderator"
												? "bg-blue-500/10 text-blue-500"
												: "bg-gray-500/10 text-gray-500"
										}`}
									>
										{user.role}
									</span>
								</div>
								<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground mt-1">
									<div className="flex items-center gap-1">
										<Mail className="w-3 h-3" />
										<span className="truncate">{user.email}</span>
									</div>
									<div className="flex items-center gap-1">
										<MapPin className="w-3 h-3" />
										<span>{user.location}</span>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center gap-3 ml-auto">
							<div className="flex items-center gap-1 text-xs text-muted-foreground">
								<Calendar className="w-3 h-3" />
								<span>
									{new Date(user.joinDate).toLocaleDateString()}
								</span>
							</div>

							<Button
								variant="ghost"
								size="sm"
								className="ml-auto"
							>
								<MoreHorizontal className="w-4 h-4" />
							</Button>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
});

UsersTable.displayName = "UsersTable";
