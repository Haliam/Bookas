## UC-006: Provider Onboarding

**Actor**: New Provider  
**Preconditions**: User has registered with Provider role  
**Page**: `/onboarding-provider`

### Diagram
```mermaid
sequenceDiagram
    actor Provider as New Provider
    participant System
    participant Verification
    participant DB as Database
    
    System->>Provider: Redirect to provider onboarding
    System->>Provider: Display onboarding flow
    loop Steps 1-6
        System->>Provider: Display step form
        Provider->>System: Submit step data
        System->>System: Validate data
        alt Step 4: Documents
            Provider->>System: Upload verification documents
            System->>Verification: Submit for verification
        end
        System->>DB: Save progress
    end
    Provider->>System: Complete all steps
    System->>DB: Create provider profile
    alt Requires Approval
        System->>Verification: Submit for approval
        System->>Provider: Display pending status
    else Auto-approved
        System->>DB: Activate provider
        System->>Provider: Redirect to dashboard
    end
```

### Main Flow
1. System redirects newly registered provider to provider onboarding
2. System displays provider-specific onboarding flow
3. Provider completes onboarding steps:
   - **Step 1**: Business information
     - Business name
     - Business type
     - Business description
     - Contact information
   - **Step 2**: Service area and location
     - Physical address
     - Service areas
     - Operating regions
   - **Step 3**: Business hours setup
     - Regular working hours
     - Days of operation
     - Time zones
   - **Step 4**: Verification documents
     - Business license (if applicable)
     - Identification documents
     - Certifications
   - **Step 5**: Payment setup
     - Bank account information
     - Payment preferences
     - Pricing structure
   - **Step 6**: Service setup (initial)
     - Create first service/offering
     - Set pricing and duration
4. Provider completes all steps
5. System validates all information
6. System submits provider profile for approval (if required)
7. System displays completion message
8. System redirects to provider dashboard

### Alternative Flows
**A1: Incomplete Verification Documents**
- System marks provider as "Pending Verification"
- Provider can use limited features
- System sends reminder to complete verification

**A2: Save and Continue Later**
- Provider saves progress
- System marks completion percentage
- Provider can resume from saved step

**A3: Verification Rejected**
- System notifies provider of rejection
- System displays rejection reasons
- Provider can resubmit documents

**A4: Skip Optional Steps**
- Provider skips non-critical steps
- System marks for later completion
- Provider can access these from settings

### Postconditions
- Provider profile is created and complete
- Provider business information is stored
- Provider can create companies and services
- Provider account is active or pending approval

### Business Rules
- Business information is mandatory
- Document verification may be required based on business type
- First service creation is optional during onboarding
- Provider must complete onboarding to accept bookings
- Approval process may take 24-48 hours

*Last updated: March 6, 2026*
