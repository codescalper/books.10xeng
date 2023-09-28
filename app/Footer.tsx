import { FaTwitter, FaInstagram, FaDiscord, FaTelegram, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const links = [
        {
            title: "About Us",
            href: "#about-us",
        },
        {
            title: "Books",
            href: "/books",
        },
        {
            title: "Blogs",
            href: "https://mayankonweb.hashnode.dev/",
        },
        {
            title: "Developer",
            href: "https://www.linkedin.com/in/codescalper/",
        },
        {
            title: "Contact Us",
            href: "#",
        },
    ];

    return (
        <footer className="py-12">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row items-center justify-center">

                    <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-5 gap-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                className="text-center hover:text-purple-500"
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                </div>
                <div className="flex justify-between flex-col md:flex-row items-center mt-2">

                    <h2 className="text-2xl font-bold mt-5">EngHub</h2>
                    <div className="flex gap-4 mt-5">
                        <a href="https://twitter.com/mayanks_tw" className="text-gray-500 hover:text-blue-400">
                            <FaTwitter size="1.5em" />
                        </a>
                        <a href="https://www.instagram.com/mayankonweb/" className="text-gray-500 hover:text-red-500">
                            <FaInstagram size="1.5em" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-500">
                            <FaLinkedin size="1.5em" />
                        </a>
                        <a href="https://t.me/codescalper" className="text-gray-500 hover:text-blue-400">
                            <FaTelegram size="1.5em" />
                        </a>
                        <a href="https://www.youtube.com/@mhtcetshalamayanksingh" className="text-gray-500 hover:text-red-600">
                            <FaYoutube size="1.5em" />
                        </a>
                        <a href="https://github.com/codescalper" className="text-gray-500 hover:text-green-500">
                            <FaGithub size="1.5em" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t-1 border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                        Copyright © {new Date().getFullYear()} EngHub. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}