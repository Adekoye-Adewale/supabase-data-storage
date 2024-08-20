'use client'
import React, { useState } from 'react';
import PhotoIcon from '@/icons/photoIcon';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function UserProfileForm() {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <form action="">
      <span>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="block w-full rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400  focus:outline-none focus:ring-0 focus:border-sky-200  sm:text-sm sm:leading-6 caret-sky-200" />
      </span>

      <span>
        <label
          htmlFor="userName"
          className="block text-sm font-medium leading-6 text-white"
        >
          User Name
        </label>
        <input
          type="text"
          name="userName"
          placeholder="@user1234"
          className="block w-full rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400  focus:outline-none focus:ring-0 focus:border-sky-200  sm:text-sm sm:leading-6 caret-sky-200"
        />
      </span>

      <span>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="sample@email.com"
          className="block w-full rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus:border-sky-200 sm:text-sm sm:leading-6 caret-sky-200"
        />
      </span>

      <span>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium leading-6 text-white"
        >
          Phone Number
        </label>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="NG"
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="block w-full rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-sky-200 sm:text-sm sm:leading-6 caret-sky-200"
          placeholder="Enter phone number"
        />
      </span>

      <span>
        <label
          htmlFor="userAvartar"
          className="block text-sm font-medium leading-6 text-white"
        >
          User Avartar
        </label>
        <input
          type="url"
          name="userAvartar"
          id="userAvartar"
          className="block rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  focus:outline-none focus:ring-0 focus:border-sky-200  sm:text-sm sm:leading-6 caret-sky-200"
        />
      </span>

      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-white">
          Cover photo
        </label>
        <div
          className="mt-2 flex justify-center rounded-lg border border-dashed border-sky-200/60 bg-gray-800/50 px-6 py-10"
        >
          <div className="text-center">
            <PhotoIcon />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
          About
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-sky-200 sm:text-sm sm:leading-6 caret-sky-200"
            defaultValue={''}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Write a few sentences about yourself.
        </p>
      </div>

    </form>
  )
}
