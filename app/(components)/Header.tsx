"use client";

import React from "react";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { Authenticated, AuthLoading, Unauthenticated, useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";

const Header = () => {
    const { isSignedIn, signOut } = useAuth();
    const { user } = useUser();
    const createUser = useMutation(api.user.createUser);

    // Call the mutation to save the user info in Convex DB
    if (user) {
        createUser({
            userId: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.fullName ?? '',
            username: user.username ?? '',
            pfp: user.imageUrl,
        });
    }
    return (
        <header className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <p className='logo_text'><span className="text-blue-700 text-3xl">D</span>etoxify</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Pass Test
                        </Link>
                        <UserButton />
                    </div>
                ) : (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='#' className='black_btn'>
                            <Unauthenticated>
                                <div>
                                    <SignInButton />
                                </div>
                            </Unauthenticated>
                            <AuthLoading>
                                <p>Still loading...</p>
                            </AuthLoading>
                        </Link>
                        <Link href='#' className='black_btn'>
                            <Unauthenticated>
                                <div>
                                    <SignUpButton />
                                </div>
                            </Unauthenticated>
                            <AuthLoading>
                                <p>Still loading...</p>
                            </AuthLoading>
                        </Link>
                    </div>
                )}
            </div>

            {/* <div className="flex">
                <div className="text-center">
                    <Authenticated>
                        <div>
                            <UserButton />
                        </div>
                    </Authenticated>
                    <Unauthenticated>
                        <div>
                            <p>Logged out:</p>
                            <SignInButton />
                        </div>
                    </Unauthenticated>
                    <AuthLoading>
                        <p>Still loading...</p>
                    </AuthLoading>
                </div>
            </div> */}
        </header>
    );
};

export default Header;