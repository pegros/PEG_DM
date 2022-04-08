---
# SFPEG DM Components
---


## Introduction

This package contains a set of Aura components implemented to slightly adapt the out-of-the-box
Distributed Marketing experience to streamline / simplify the steps.

These components were built as contributions/examples for former & ongoing Advisory assignments by 
[Pierre-Emmanuel Gros](https://github.com/pegros). 

They have been successfully deployed in conjunction with the **[PEG_TCRM](https://github.com/pegros/PEG_TCRM)**
package component (to target Campaign Members in Tableau CRM and add them to the Campaign)

## Package Content

This package contains the following Aura components:
* **sfpegDmMessagesCmp** to customise the CampaignMessages standard component to hide some buttons
or sections depending on the information actually set on the campaign. 

![Messages Customization](/media/sfpegDmMessages.png)<br/>
_Examples of different CampaignMessages customizations_


* **sfpegDmBulkSendEntryCmp** to use the BulkSendEntry standard component directly on the Campaign
record page instead of the Bulk Send Job one, leveraging a direct lookup from the Campaign to e.g. the
latest generated Bulk Send Job.

![Bulk Send Entry](/media/sfpegDmBulkSendEntry.png)

## Components Configuration

***TO BE COMPLETED***

## Technical Details

These components consist in Aura wrappers built around standard Distributed marketing package
components to:
* modify their display (by CSS override)
* reuse them on different record pages by fetching and injecting record IDs.

