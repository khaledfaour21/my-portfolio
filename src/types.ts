/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LanguageCode = "en" | "ar" | "de" | "nl";

export interface Translatables {
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navContact: string;
  heroIntro: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaWork: string;
  heroCtaContact: string;
  aboutTitle: string;
  aboutRole: string;
  aboutBio: string;
  aboutEducationTitle: string;
  aboutEduMba: string;
  aboutEduMbaDate: string;
  aboutEduMbaLocation: string;
  aboutEduBsc: string;
  aboutEduBscDate: string;
  aboutEduBscLocation: string;
  aboutEduBscSpecialization: string;
  aboutEduBscGrade: string;
  techStackTitle: string;
  techStackSubtitle: string;
  experienceTitle: string;
  experienceSubtitle: string;
  experienceJob1Title: string;
  experienceJob1Date: string;
  experienceJob1Company: string;
  experienceJob1Points: string[];
  experienceJob2Title: string;
  experienceJob2Date: string;
  experienceJob2Company: string;
  experienceJob2Points: string[];
  projectsTitle: string;
  projectsSubtitle: string;
  projectTabLive: string;
  projectTabLocal: string;
  projectVisitLive: string;
  projectViewCode: string;
  projectInteractiveDemo: string;
  projectFeatureHighlight: string;
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactSubjectLabel: string;
  contactMessageLabel: string;
  contactSendBtn: string;
  contactSending: string;
  contactSuccess: string;
  contactError: string;
  projectSwipeTip: string;
  footerRights: string;
  resumeDownload: string;

  // Added translatables for full coverage localization audit
  heroHeaderCategory: string;
  heroCredentials: string;
  heroNetActive: string;
  heroDesignSyria: string;
  heroDesignSyrRef: string;
  heroCoreLanguages: string;
  heroCoreAcademPercent: string;
  heroCoreSystemCore: string;
  heroCoreAcademicAvg: string;
  heroTitleDesignFirst: string;
  heroTitleDesignSecond: string;

  aboutHeadingCategory: string;
  aboutEduCategory: string;
  aboutBadgeAgile: string;
  aboutBadgeBilingual: string;
  aboutBadgeExecutive: string;
  aboutEduInProgress: string;
  aboutEduCompleted: string;
  aboutEduSpecializationLabel: string;

  techStackHeadingCategory: string;
  skillLevelExpert: string;
  skillLevelAdvanced: string;
  skillLevelIntermediate: string;

  experienceHeadingCategory: string;
  experienceTitleInteractive: string;
  experienceOperationalSubtitle: string;
  experienceKeySkillsLabel: string;

  projectsHeadingCategory: string;
  projectsLiveHighlightLabel: string;
  projectsFunctionalPillarsLabel: string;
  projectsGraduationGradeLabel: string;
  projectsSimCoreSystemLabel: string;
  projectsSimOverseerTitle: string;
  projectsSimTotalEnrolledLabel: string;
  projectsSimStaffMembersLabel: string;
  projectsSimNetworkGateLabel: string;
  projectsSimGateSecureLabel: string;
  projectsSimAccessTrailTitle: string;
  projectsSimLog1: string;
  projectsSimLog2: string;
  projectsSimLog3: string;
  projectsSimGradingTitle: string;
  projectsSimGradingSubtitle: string;
  projectsSimMathTitle: string;
  projectsSimSoftwareTitle: string;
  projectsSimNetworkingTitle: string;
  projectsSimPortalTitle: string;
  projectsSimGPAPercentileLabel: string;
  projectsSimGradAssessmentLabel: string;
  projectsSimGuardianConsoleTitle: string;
  projectsSimTuitionDispLabel: string;
  projectsSimTuitionSemesterLabel: string;
  projectsSimPaidLabel: string;
  projectsSimLedgerIDLabel: string;
  projectsSimSSlSecuredLabel: string;
  projectsSimFacultyNoteLabel: string;
  projectsSimFacultyNoteVal: string;
  projectsSimCivicCoreSystemLabel: string;
  projectsSimLiveFeedTab: string;
  projectsSimSubmitTab: string;
  projectsSimActiveCivicTitle: string;
  projectsSimLiveTrackingLabel: string;
  projectsSimDistrictLabel: string;
  projectsSimTransmitTitle: string;
  projectsSimProposalLabel: string;
  projectsSimProposalPlaceholder: string;
  projectsSimDistrictOrRouteLabel: string;
  projectsSimRecordGroupTypeLabel: string;
  projectsSimCommunityInitiativeVal: string;
  projectsSimPublicComplaintVal: string;
  projectsSimSubmitEntryBtn: string;
  projectsSimCoFounderLabel: string;
  projectsSimStudentSub: string;

  contactHeadingCategory: string;
  contactSecureCoordinatesTitle: string;
  contactPrimaryEmailLabel: string;
  contactMobileLineLabel: string;
  contactPhysicalPresenceLabel: string;
  contactSocialPortsTitle: string;
  contactSecureFormTitle: string;
  contactLocalFeedTitle: string;

  navSelectRegion: string;
  currentLangLabel: string;
  navThemeBright: string;
  navThemeDark: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: Record<LanguageCode, string>;
  longDescription: Record<LanguageCode, string>;
  tech: string[];
  isLive: boolean;
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
  highlights?: Record<LanguageCode, string[]>;
}

export interface ExperienceType {
  id: string;
  role: Record<LanguageCode, string>;
  company: string;
  location: Record<LanguageCode, string>;
  period: Record<LanguageCode, string>;
  points: Record<LanguageCode, string[]>;
  skills: string[];
}
