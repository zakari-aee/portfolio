'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
	const [copied, setCopied] = useState(false);

	const email = 'zakariaealliouate@gmail.com';
	const whatsappNumber = '+212632837315';
	const displayRepos = '15+';

	const copyToClipboard = async () => {
		try {
			const ta = document.createElement('textarea');
			ta.value = email;
			ta.style.position = 'fixed';
			ta.style.top = '0';
			ta.style.left = '0';
			ta.style.opacity = '0';
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
			try {
				await navigator.clipboard.writeText(email);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			} catch (navErr) {
				console.error('Clipboard error:', navErr);
			}
		}
	};

	const handleEmailClick = (e) => {
		if (window.innerWidth <= 640) { // mobile
			window.location.href = `mailto:${email}`;
			e.preventDefault();
		} else {
			copyToClipboard();
		}
	};

	return (
		<div id="home" className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-950 text-white font-inter relative overflow-hidden">

			<div className="text-center relative z-10 max-w-3xl mx-auto">
				{/* Name */}
				<motion.div
					className="mb-6 sm:mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white">ZAKARIAE</h1>
					<h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-800 via-purple-400 to-cyan-430 bg-clip-text text-transparent">ALLIOUATE</h1>
				</motion.div>

				{/* Tagline */}
				<motion.h2
					className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-300"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					I design & code for web
				</motion.h2>

				{/* Description */}
				<motion.p
					className="text-lg sm:text-xl text-gray-400 mb-8 px-2 sm:px-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					Full Stack Developer creating modern web applications and digital experiences that help businesses grow.
				</motion.p>

				{/* Actions */}
				<motion.div
					className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<a
						href="/files/cv_pdf/Zakariae_Alliouate_CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-white text-gray-900 rounded-full text-base font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
					>
						<FileDown className="w-5 h-5 mr-2" />
						Download CV
					</a>
					<a
						href="#about"
						className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-base font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
					>
						<User className="w-5 h-5 mr-2" />
						About Me
					</a>
				</motion.div>

				{/* Email / Clipboard */}
				<motion.div
					className="flex justify-center mb-6"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.7 }}
				>
					<button
						onClick={handleEmailClick}
						className="group relative flex items-center justify-center gap-2 py-2 px-6 hover:bg-white/5 transition-colors rounded-lg cursor-pointer"
					>
						<span className="text-gray-400 group-hover:text-white truncate">{email}</span>
						<div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
							{copied ? (
								<Check className="w-4 h-4 text-green-500" />
							) : (
								<Copy className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
							)}
						</div>
					</button>
				</motion.div>

				{/* Social Links */}
				<motion.div
					className="grid grid-cols-3 justify-center gap-6 mt-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					{[
						{ icon: Github, href: "https://github.com/zakari-aee", count: displayRepos, label: "GitHub Projects" },
						{ icon: Linkedin, href: "https://linkedin.com/in/zakariae-alliouate", count: "500+", label: "LinkedIn Followers" },
						{ icon: MessageCircle, href: `https://wa.me/${whatsappNumber}`, count: "24x7", label: "WhatsApp Me" }
					].map(({ icon: Icon, href, count, label }, idx) => (
						<a
							key={idx}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center transition-colors"
						>
							<Icon className="w-6 h-6 text-gray-400 mb-1 group-hover:text-blue-400 transition-colors duration-300" />
							<span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{count}</span>
							<span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300">{label}</span>
						</a>
					))}
				</motion.div>

			</div>
		</div>
	);
};

export default Hero;
