# Profile & Settings Use Cases

## UC-024: View Provider Profile

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/profile`

### Main Flow
1. Provider navigates to profile page
2. System retrieves provider's profile information
3. System displays profile with sections:
   - **Personal Information**
     - Full name
     - Profile photo
     - Email address
     - Phone number
     - Bio/About section
   - **Professional Information**
     - Business description
     - Years of experience
     - Certifications
     - Specializations
   - **Business Details**
     - Service areas
     - Languages spoken
     - Accepted payment methods
   - **Public Profile Preview**
     - How customers see the profile
     - Rating and reviews summary
     - Portfolio/Gallery
   - **Statistics**
     - Total bookings
     - Completion rate
     - Average rating
     - Customer satisfaction
4. Provider can navigate to edit mode

### Alternative Flows
**A1: View Public Profile**
- Provider clicks "View as Customer"
- System displays public-facing profile
- Provider sees exactly what customers see
- Provider can return to full profile view

**A2: View Profile Analytics**
- Provider clicks "Profile Analytics"
- System shows profile performance metrics
  - Profile views
  - Conversion rate
  - Popular services
  - Peak booking times
- Charts and graphs display trends

**A3: Share Profile**
- Provider clicks "Share Profile"
- System generates shareable link
- Provider can share via social media, email
- System provides QR code for offline sharing

### Postconditions
- Provider reviews their profile information
- Provider can identify areas needing updates

### Business Rules
- Profile completion percentage is calculated
- Incomplete profiles show completion prompts
- Public profile respects privacy settings
- Statistics update daily
- Profile photos must meet size/format requirements

---

## UC-025: Edit Provider Profile

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/profile` (edit mode)

### Main Flow
1. Provider clicks "Edit Profile" button
2. System displays editable profile form
3. Provider updates information:
   - **Personal Details**
     - Name
     - Profile photo upload/change
     - Contact information
     - Bio (with character limit)
   - **Professional Details**
     - Business description
     - Experience
     - Certifications (upload documents)
     - Specializations (tags/categories)
     - Education/Training
   - **Services & Specialties**
     - Primary specializations
     - Service keywords
     - Target audience
   - **Media & Portfolio**
     - Upload photos
     - Add portfolio items
     - Video introduction (optional)
   - **Location & Availability**
     - Service areas/regions
     - Languages
     - Accessibility options
4. Provider uploads new images/documents (if any)
5. Provider submits changes
6. System validates all fields
7. System checks for required information
8. System updates profile
9. System displays success message
10. System shows updated profile

### Alternative Flows
**A1: Photo Upload**
- Provider clicks "Change Photo"
- Provider selects image file
- System validates file type and size
- Provider crops/adjusts image
- System uploads and processes image
- Profile photo is updated

**A2: Incomplete Required Fields**
- System highlights missing required fields
- System shows validation errors
- Provider completes required information
- Provider resubmits

**A3: Document Verification Upload**
- Provider uploads certification documents
- System sends for verification
- Provider receives verification status
- Verified badges appear on profile

**A4: Cancel Changes**
- Provider clicks "Cancel"
- System shows confirmation if changes exist
- System discards unsaved changes
- Provider returns to view mode

**A5: Save as Draft**
- Provider saves partial changes
- System stores draft
- Provider can continue editing later
- Changes not visible to public yet

**A6: Invalid File Upload**
- System validates file format
- System checks file size
- System displays error if invalid
- Provider uploads valid file

### Postconditions
- Provider profile is updated
- Changes reflect in public profile
- Profile completion percentage updates
- Search/discovery uses updated information

### Business Rules
- Profile photo: max 5MB, JPG/PNG only
- Bio: max 500 characters
- Maximum 20 portfolio images
- Certification documents require manual verification
- Changes to verified information may require re-verification
- Some fields may take 24 hours to update in search
- Inappropriate content is flagged automatically

---

## UC-026: Manage Settings

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/settings`

### Main Flow
1. Provider navigates to settings page
2. System displays settings organized in categories:
   - **Account Settings**
     - Email and password
     - Two-factor authentication
     - Account status
     - Linked accounts
   - **Notification Preferences**
     - Email notifications
     - SMS notifications
     - Push notifications
     - Notification frequency
   - **Booking Settings**
     - Auto-accept bookings
     - Advance booking window
     - Cancellation policy
     - Buffer times
     - Maximum daily bookings
   - **Payment & Billing**
     - Payment methods
     - Payout schedule
     - Tax information
     - Pricing currency
   - **Privacy & Security**
     - Profile visibility
     - Data sharing preferences
     - Session management
     - Login history
   - **Calendar Integration**
     - Google Calendar sync
     - Outlook sync
     - Apple Calendar sync
     - iCal export
   - **Language & Region**
     - Interface language
     - Timezone
     - Date format
     - Currency
3. Provider modifies desired settings
4. Provider saves changes
5. System validates settings
6. System applies changes
7. System displays confirmation

### Alternative Flows
**A1: Change Password**
- Provider clicks "Change Password"
- System requests current password
- Provider enters current password
- Provider enters new password twice
- System validates password strength
- System updates password
- System sends confirmation email

**A2: Enable Two-Factor Authentication**
- Provider clicks "Enable 2FA"
- System displays setup options (SMS, App)
- Provider chooses method
- System generates setup code/QR
- Provider completes setup
- System verifies 2FA setup
- Provider receives backup codes

**A3: Configure Auto-Accept**
- Provider toggles auto-accept
- System shows configuration options:
  - Auto-accept for repeat customers only
  - Auto-accept up to X bookings per day
  - Auto-accept for specific services
  - Blackout dates
- Provider sets parameters
- System saves configuration

**A4: Set Cancellation Policy**
- Provider clicks "Edit Cancellation Policy"
- System shows policy templates:
  - Flexible (24 hour notice)
  - Moderate (48 hour notice)
  - Strict (72 hour notice)
  - Custom
- Provider selects or customizes policy
- System updates booking terms

**A5: Link External Calendar**
- Provider selects calendar service
- System redirects to authentication
- Provider authorizes access
- System establishes two-way sync
- System confirms successful linkage

**A6: Privacy Settings**
- Provider adjusts visibility settings
  - Profile visibility (Public/Private)
  - Contact information visibility
  - Last active status
  - Review visibility
- System applies privacy preferences
- Public profile updates accordingly

**A7: Export Data**
- Provider clicks "Export My Data"
- System prepares data export
- Provider receives download link via email
- Data includes all profile and booking information

**A8: Delete Account**
- Provider clicks "Delete Account"
- System shows warning and consequences
- System requires password confirmation
- System checks for pending bookings
- Provider confirms understanding
- System deactivates account
- System sends confirmation email

### Postconditions
- Settings are updated and applied
- System behavior reflects new settings
- Integration services are connected/disconnected
- User experience adapts to preferences

### Business Rules
- Password changes require current password verification
- 2FA is recommended but optional
- Some settings require email verification
- Cancellation policy applies to new bookings only
- Calendar sync is bidirectional
- Account deletion has 30-day grace period
- Critical setting changes send email notifications
- Payment settings may require identity verification

---

*Last updated: March 6, 2026*
