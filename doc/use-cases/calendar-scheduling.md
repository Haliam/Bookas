# Calendar & Scheduling Use Cases

## UC-020: View Calendar

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/calendar`

### Main Flow
1. Provider navigates to calendar page
2. System retrieves provider's appointments and availability
3. System displays calendar with:
   - Monthly/Weekly/Daily view options
   - Confirmed appointments
   - Blocked time slots
   - Available time slots
   - Pending appointment requests
   - Color-coded indicators by status/company
4. Provider can interact with calendar:
   - Switch between views
   - Navigate to different dates
   - Click appointments for details
   - Click time slots to block/unblock
5. Provider can see appointment details on hover/click

### Alternative Flows
**A1: Switch Calendar View**
- Provider clicks view toggle (Month/Week/Day)
- System updates calendar display
- Appointments are reorganized accordingly

**A2: Navigate to Specific Date**
- Provider uses date picker
- System jumps to selected date
- Appointments for that period are displayed

**A3: Filter by Company/Service**
- Provider applies filter
- System shows only relevant appointments
- Calendar is updated with filtered data

**A4: Export Calendar**
- Provider clicks "Export" button
- System offers export formats (iCal, CSV, PDF)
- Provider selects format
- System generates and downloads file

**A5: Sync with External Calendar**
- Provider clicks "Sync Calendar"
- System offers integration options (Google, Outlook, Apple)
- Provider authorizes connection
- System establishes sync

### Postconditions
- Provider views their schedule
- Provider can manage time efficiently
- Conflicts are visually identified

### Business Rules
- Calendar displays times in provider's timezone
- Past dates are read-only
- Maximum forward view: 6 months
- Auto-refresh every 5 minutes
- Double-bookings are prevented
- Buffer times are visually indicated

---

## UC-021: Configure Working Hours

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/hours`

### Main Flow
1. Provider navigates to working hours configuration
2. System displays current working hours setup
3. System shows weekly schedule grid with:
   - Days of week (Monday-Sunday)
   - Time slots for each day
   - On/Off toggle for each day
   - Multiple time ranges per day option
4. Provider configures hours:
   - Toggles days on/off
   - Sets start time for each day
   - Sets end time for each day
   - Adds break times (optional)
   - Adds split shifts (optional)
5. Provider can apply templates:
   - Mon-Fri standard hours
   - Custom patterns
   - Copy from another company
6. Provider saves configuration
7. System validates hours (no overlaps, logical times)
8. System updates availability
9. System adjusts appointment acceptance rules
10. System displays confirmation

### Alternative Flows
**A1: Add Break Time**
- Provider clicks "Add Break"
- Provider specifies break start and end time
- System marks break time as unavailable
- Appointments don't overlap breaks

**A2: Configure Split Shift**
- Provider enables split shift for a day
- Provider sets morning hours (e.g., 9am-1pm)
- Provider sets evening hours (e.g., 5pm-9pm)
- System treats as separate availability blocks

**A3: Set Different Hours per Company/Service**
- Provider clicks "Advanced Settings"
- Provider configures hours by company
- Provider configures hours by service type
- System applies specific rules accordingly

**A4: Temporary Hours Change**
- Provider sets date range for temporary hours
- Provider configures special hours
- System applies temporary schedule
- System reverts to regular hours after period

**A5: Validation Error**
- System detects invalid configuration
- System highlights issues (e.g., end before start)
- Provider corrects errors
- Provider resubmits

**A6: Copy to All Days**
- Provider configures one day
- Provider clicks "Copy to All Days"
- System applies same hours to all days
- Provider can adjust individual days after

### Postconditions
- Working hours are updated
- Booking system reflects new availability
- Existing appointments outside new hours are flagged
- Future bookings respect new hours

### Business Rules
- Minimum work period: 30 minutes
- Maximum work period: 16 hours per day
- Break times minimum: 15 minutes
- Hours can't overlap within same day
- Changes apply to future bookings only
- Existing appointments are honored
- 24-hour advance notice recommended for hour changes

---

## UC-022: Block Time Slots

**Actor**: Provider  
**Preconditions**: Provider is logged in  
**Page**: `/provider/block-time` or `/provider/calendar`

### Main Flow
1. Provider navigates to block time page or clicks time slot on calendar
2. System displays blocking interface
3. Provider specifies blocking details:
   - Start date and time
   - End date and time
   - Reason for blocking:
     - Personal time off
     - Holiday
     - Meeting/Training
     - Maintenance
     - Other (custom reason)
   - Recurrence (optional):
     - Does not repeat
     - Daily
     - Weekly
     - Custom pattern
   - Affected companies (all or specific)
   - Internal notes
4. Provider submits block request
5. System checks for existing appointments in the range
6. System displays conflicts (if any)
7. Provider confirms despite conflicts OR adjusts time
8. System blocks the time slot
9. System prevents new bookings for that period
10. System displays confirmation

### Alternative Flows
**A1: Conflicts with Existing Appointments**
- System lists conflicting appointments
- System offers options:
  - Cancel existing appointments
  - Reschedule existing appointments
  - Adjust block time to avoid conflicts
- Provider chooses option
- System processes accordingly

**A2: Recurring Block**
- Provider sets recurrence pattern
- System shows preview of all blocked dates
- Provider confirms pattern
- System creates all block instances
- Each instance can be edited individually

**A3: Quick Block from Calendar**
- Provider clicks time slot on calendar directly
- System opens quick-block dialog
- Provider confirms time and reason
- System blocks immediately

**A4: Block Full Day**
- Provider selects "Block Full Day" option
- System blocks all working hours for selected date
- Multiple dates can be selected
- System processes bulk blocking

**A5: Emergency Block**
- Provider marks block as "Emergency"
- System automatically notifies affected customers
- System offers to reschedule affected appointments
- System prioritizes notifications

### Postconditions
- Time slots are blocked
- No new bookings can be made for blocked times
- Calendar shows blocked periods
- Block can be edited or removed later

### Business Rules
- Minimum block duration: 15 minutes
- Maximum advance block period: 2 years
- Blocks take precedence over working hours
- Overlapping blocks are merged
- Past times cannot be blocked
- Recurring blocks create separate instances
- Each block can be individually managed

---

## UC-023: Unblock Time Slots

**Actor**: Provider  
**Preconditions**: Provider has blocked time slots  
**Page**: `/provider/block-time` or `/provider/calendar`

### Main Flow
1. Provider navigates to blocked times list or calendar
2. System displays all active blocked time slots
3. Provider identifies time slot to unblock
4. Provider clicks "Unblock" or "Remove Block" button
5. System displays confirmation dialog showing:
   - Time range being unblocked
   - Potential bookings that could be made
   - Any pending requests for that time
6. Provider confirms unblock action
7. System removes time block
8. System restores availability for those time slots
9. System notifies pending requesters (if any)
10. System displays confirmation

### Alternative Flows
**A1: Unblock Recurring Block Series**
- Provider selects recurring block
- System offers options:
  - Unblock this instance only
  - Unblock this and all future instances
  - Unblock entire series
- Provider chooses option
- System processes accordingly

**A2: Partial Unblock**
- Provider wants to unblock part of blocked period
- Provider edits block times
- Provider shortens blocked period
- System unblocks only requested portion

**A3: Pending Requests Exist**
- System shows pending booking requests for that time
- Provider can review requests
- Provider can accept requests immediately
- System processes acceptances

**A4: Cancel Unblock**
- Provider clicks "Cancel" in confirmation
- System closes dialog
- Block remains active
- No changes are made

**A5: Bulk Unblock**
- Provider selects multiple blocked slots
- Provider clicks "Unblock Selected"
- System confirms bulk action
- System removes all selected blocks

### Postconditions
- Time slots are available again
- Booking system accepts new requests for those times
- Calendar reflects availability
- Pending requesters are notified

### Business Rules
- Past blocked times cannot be unblocked (irrelevant)
- Unblocking doesn't automatically create appointments
- Customers searching for availability see newly opened slots
- Pending requests get priority for newly opened slots
- Unblock action is logged in history
- Recurring blocks can be managed individually or as series

---

*Last updated: March 6, 2026*
