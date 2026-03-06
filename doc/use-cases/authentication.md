# Authentication & Access Use Cases

## UC-001: User Registration

**Actor**: New User  
**Preconditions**: User is not registered in the system  
**Page**: `/register`

### Main Flow
1. User navigates to the registration page
2. System displays registration form
3. User enters required information:
   - Full name
   - Email address
   - Password
   - Password confirmation
   - User type selection (Customer/Provider)
4. User submits the registration form
5. System validates the input data
6. System creates new user account
7. System sends verification email (if applicable)
8. System redirects to onboarding page

### Alternative Flows
**A1: Invalid Email Format**
- System displays error message
- User corrects email and resubmits

**A2: Email Already Exists**
- System displays "Email already registered" message
- System offers to redirect to login page

**A3: Password Mismatch**
- System displays "Passwords don't match" error
- User re-enters passwords

**A4: Weak Password**
- System displays password requirements
- User enters stronger password

### Postconditions
- New user account is created in the system
- User is redirected to appropriate onboarding flow

### Business Rules
- Email must be unique in the system
- Password must meet security requirements (minimum length, complexity)
- All required fields must be filled

---

## UC-002: User Login

**Actor**: Registered User  
**Preconditions**: User has a valid account  
**Page**: `/login`

### Main Flow
1. User navigates to login page
2. System displays login form
3. User enters credentials:
   - Email address
   - Password
4. User clicks "Login" button
5. System validates credentials
6. System creates user session
7. System redirects to appropriate dashboard based on user role

### Alternative Flows
**A1: Invalid Credentials**
- System displays "Invalid email or password" message
- User can retry login

**A2: Account Not Verified**
- System displays "Please verify your email" message
- System offers to resend verification email

**A3: Account Locked**
- System displays "Account temporarily locked" message
- System shows when account will be unlocked

**A4: Remember Me Option**
- User selects "Remember Me" checkbox
- System extends session duration

### Postconditions
- User is authenticated and logged into the system
- User session is created
- User is redirected to their dashboard

### Business Rules
- Maximum of 5 failed login attempts before account lock
- Account lock duration: 15 minutes
- Session timeout after 24 hours of inactivity (if "Remember Me" is not selected)

---

## UC-003: Password Recovery

**Actor**: Registered User  
**Preconditions**: User has forgotten their password  
**Page**: `/forgot-password`

### Main Flow
1. User navigates to "Forgot Password" page
2. System displays password recovery form
3. User enters registered email address
4. User submits the form
5. System validates email exists in the database
6. System generates password reset token
7. System sends password reset email with link
8. System displays confirmation message
9. User clicks link in email
10. System validates token
11. System displays password reset form
12. User enters new password and confirmation
13. User submits new password
14. System updates password
15. System displays success message
16. System redirects to login page

### Alternative Flows
**A1: Email Not Found**
- System displays generic "If email exists, reset link sent" message (security)
- Process ends

**A2: Expired Token**
- System displays "Reset link expired" message
- User must request new reset link

**A3: Invalid Token**
- System displays error message
- User is redirected to forgot password page

### Postconditions
- User password is updated
- Old password is invalidated
- User can login with new password

### Business Rules
- Password reset token expires after 1 hour
- Token can only be used once
- New password cannot be same as old password
- System sends reset email only to registered emails

---

## UC-004: Role Switching

**Actor**: Authenticated User with multiple roles  
**Preconditions**: User is logged in and has access to multiple roles (e.g., Customer and Provider)  
**Page**: `/role-switch`

### Main Flow
1. User navigates to role switch page
2. System displays available roles for the user
3. User selects desired role
4. System updates user session with selected role
5. System redirects to appropriate dashboard for selected role

### Alternative Flows
**A1: Single Role User**
- System automatically assigns default role
- User is redirected to appropriate dashboard

**A2: Session Timeout During Switch**
- System logs out user
- User is redirected to login page

### Postconditions
- User's active role is switched
- User has access to role-specific features
- Session is updated with new role context

### Business Rules
- Only users with multiple approved roles can switch
- Role permissions are immediately applied after switch
- Previous role context is saved

---

*Last updated: March 6, 2026*
