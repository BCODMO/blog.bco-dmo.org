---
layout: post
type: BlogPosting
published: true 
title: "Backend Architecture for BCO-DMO Dataset DOIs"
description: "BCO-DMO’s new DOI pipeline enables a smooth and faster DOI Build, Publish and Access mechanism. It is designed as a controlled, multi-step process that ensure reproducibility and accessibility over long term. The core backend APIs, Database and Storage are hosted on AWS and Front-end (Submission Tool & Website) on Vercel. Thus making the workflow reliable and scalable."
category: insights
date: 2026-05-11
lastModified: 2026-05-11 11:36
author: [shravani,vimal,adam]  
tags: 
  - data submission
  - data management
  - BCO-DMO
images:
  - id: bcodmo_logo
    primary: true
    path: ../bcodmo-logo.jpg
    url: https://www.bco-dmo.org
    border: false
    max-width: 500px
  - id: diagram
    primary: 
    path: doi-series/diagram.png
    max-width: 600px
    border: true
    caption: Preview of the Submission Tool login screen.
 
---
{% include image.html id="bcodmo_logo" position="right" %}
BCO-DMO’s new DOI pipeline enables a smooth and faster DOI Build, Publish and Access mechanism. It is designed as a controlled, multi-step process that ensure reproducibility and accessibility over long term. The core backend APIs, Database and Storage are hosted on AWS and Front-end (Submission Tool & Website) on Vercel. Thus making the workflow reliable and scalable.

The main architectural principle behind this pipeline is the clear separation between frontend and backend responsibilities. The DOI logic, DOI information, data access and validation are handled by backend services exposed through scalable APIs. Frontend applications interact with the backend system only through these APIs, allowing each of them to evolve independently.

<hr/>
**Core Components of the Backend Architecture:**
1. **Database**: The DOI Metadata for each dataset is stored in AWS DynamoDB which enables fast writes & reads, and also a highly scalable, cost-effective on-demand solution.
2. **Storage**: A DOI version’s package files are stored in S3 and most of BCO-DMO’s data files are on AWS S3 and some on WHOI on-prem Data servers.
3. **API**: User interfaces of Submission Tool & Website interact with AWS API Gateway and Lambda Invocation Urls
4. **Server/Logic**: The DOI flow is logically divided into Build, Review and Publish steps which are hosted on AWS Lambda with a Python Runtime environment.
5. **Datacite**: Datacite Dataset DOI metadata is generated
<hr/>

## DOI Workflow: Build → Review → Publish 

### 1. Build Step:
This is an AWS Lambda invoked internally from submission tool that extracts required metadata from the Dataset constructed and builds private and public versions of a JSON-LD record capturing all BCO-DMO semantics, a Frictionless Datapackage, NOAA ISO19115-2 XML, and a Dataset Description pdf.

{% include image.html id="diagram" position="centered" %}

### 2. Review Step:
At this Step, a data manager reviews a successfully generated Dataset DOI package and the corresponding DOI webpage. This Draft page can also be viewed by a submitter for verification. The DOI webpage is generated from the data received by a request to an AWS API Gateway backed by Lambda that reads from DynamoDB and provides links to the DOI Package files in S3 for the website to extract metadata from. This mechanism is also applied for the display of the final DOI Web Page. 

### 3. Publish Step:
Once the Draft DOI is verified and passes BCO-DMO quality and compliance check, it is now published over to Datacite to create a DOI version.

## Failure Modes & Resilience:

The DOI pipeline is designed to fail safe with visibility and traceability.

* Errors and exceptions are caught and displayed to the Data Managers for a fix and later retry.
* Error Notifications via AWS SES to internal BCO-DMO software team for immediate attention.
* Secrets and credentials are managed using AWS Secrets Manager.

## Governance, Embargo and Access Control

Embargo implementation and validation are deployed as a backend responsibility. The canonical JSON-LD data associated with a Dataset DOI serves as a source of truth on access policies with respect to the files or the dataset itself. 

_Key aspects:_
All file URLs are masked and can only be redirected to the original data url by the receiving AWS API upon verifying the embargo policy on the Dataset based on the private JSON-LD.
