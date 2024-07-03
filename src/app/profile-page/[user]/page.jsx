import React from 'react';
import { createClient as supabase } from '@/app/utils/supabase/client';

export default async function UserPage({ params }) {
  const { user } = params; // Assuming `user` is the identifier
  let userProfile = null;
  let error = null;

  try {
    // Directly query the user profile based on the provided identifier
    const { data: userProfileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('cover_img, user_avatar, email, full_name, phone_number, user_name')
      .eq('user_name', user) // Assuming `user` is the username
      .single();

    if (profileError) {
      throw new Error(`Profile fetch error: ${profileError.message}`);
    } else {
      userProfile = userProfileData;
    }
  } catch (err) {
    error = err;
  }

  console.log('=======>',userProfile);

  if (error) {
    return <div>Error fetching user data: {error.message}</div>;
  }

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  return (
    <div>
      <h1>{params.user}</h1>
      <p>
        <span>Username:</span> {userProfile.user_name}
      </p>
      <p>
        <span>Phone Number:</span> {userProfile.phone_number} (optional: handle privacy)
      </p>
      {/* Add other profile details here */}
    </div>
  );
}
