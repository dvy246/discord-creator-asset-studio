export type AssetType =
  | 'global-profile-banner'
  | 'server-profile-banner'
  | 'server-banner'
  | 'invite-background'
  | 'server-icon'
  | 'avatar'
  | 'role-icon'
  | 'custom-emoji'
  | 'custom-sticker'
  | 'chat-attachment';

export type ConstraintType =
  | 'dimensions'
  | 'max-size'
  | 'file-types'
  | 'duration'
  | 'fps'
  | 'safe-zone'
  | 'readability';

export type Operator = 'eq' | 'gte' | 'lte' | 'approx' | 'none';

export type Gate =
  | 'none'
  | 'nitro'
  | 'nitro-basic'
  | 'boost-l1'
  | 'boost-l2'
  | 'boost-l3'
  | 'role-manage';

export type Confidence = 'high' | 'medium' | 'low';

export interface DiscordRule {
  ruleId: string;
  assetType: AssetType;
  constraint: ConstraintType;
  operator: Operator;
  value: string | number | null;
  units: string | null;
  formats: string[];
  gate: Gate;
  sourceUrl: string | null;
  quotedSourceNote: string | null;
  verifiedAt: string;
  confidence: Confidence;
  reviewDueAt: string;
  copyKey: string;
}

export const DISCORD_RULES: DiscordRule[] = [
  // Global profile banner
  {
    ruleId: 'global-banner-min-size',
    assetType: 'global-profile-banner',
    constraint: 'dimensions',
    operator: 'gte',
    value: '680x240',
    units: 'px',
    formats: ['png', 'jpg', 'gif'],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: 'Min 680x240, PNG/JPG/GIF, <10MB, Nitro required, no official safe zone.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.globalBannerMinSize'
  },
  {
    ruleId: 'global-banner-max-file-size',
    assetType: 'global-profile-banner',
    constraint: 'max-size',
    operator: 'lte',
    value: 10,
    units: 'MB',
    formats: ['png', 'jpg', 'gif'],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: 'Min 680x240, PNG/JPG/GIF, <10MB, Nitro required, no official safe zone.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.globalBannerMaxFileSize'
  },
  // Per-server profile banner
  {
    ruleId: 'server-profile-banner-min-size',
    assetType: 'server-profile-banner',
    constraint: 'dimensions',
    operator: 'gte',
    value: '600x240',
    units: 'px',
    formats: ['png', 'jpg', 'gif'],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: 'Min 600x240, PNG/JPG/GIF, <10MB, Nitro required.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverProfileBannerMinSize'
  },
  {
    ruleId: 'server-profile-banner-max-file-size',
    assetType: 'server-profile-banner',
    constraint: 'max-size',
    operator: 'lte',
    value: 10,
    units: 'MB',
    formats: ['png', 'jpg', 'gif'],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: 'Min 600x240, PNG/JPG/GIF, <10MB, Nitro required.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverProfileBannerMaxFileSize'
  },
  // Server banner
  {
    ruleId: 'server-banner-min-size',
    assetType: 'server-banner',
    constraint: 'dimensions',
    operator: 'gte',
    value: '960x540',
    units: 'px',
    formats: ['png', 'jpg', 'gif'],
    gate: 'boost-l2',
    sourceUrl: null,
    quotedSourceNote: 'At least 960x540 (16:9), 1920x1080 resized, Static requires Boost L2, Animated requires Boost L3, top 48px readability guidance.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverBannerMinSize'
  },
  {
    ruleId: 'server-banner-animated',
    assetType: 'server-banner',
    constraint: 'file-types',
    operator: 'none',
    value: null,
    units: null,
    formats: ['gif'],
    gate: 'boost-l3',
    sourceUrl: null,
    quotedSourceNote: 'Animated requires Boost L3',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverBannerAnimated'
  },
  {
    ruleId: 'server-banner-readability',
    assetType: 'server-banner',
    constraint: 'readability',
    operator: 'none',
    value: 'top 48',
    units: 'px',
    formats: [],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'top 48px readability guidance.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverBannerReadability'
  },
  // Invite background
  {
    ruleId: 'invite-background-size',
    assetType: 'invite-background',
    constraint: 'dimensions',
    operator: 'eq',
    value: '1920x1080',
    units: 'px',
    formats: ['jpg', 'png'],
    gate: 'boost-l1',
    sourceUrl: null,
    quotedSourceNote: 'Exactly 1920x1080, JPG/PNG, Boost L1, GIF unsupported, central modal simulation.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.inviteBackgroundSize'
  },
  // Server icon
  {
    ruleId: 'server-icon-size',
    assetType: 'server-icon',
    constraint: 'dimensions',
    operator: 'eq',
    value: '512x512',
    units: 'px',
    formats: ['jpg', 'png'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: '512x512 preset, Boost L1 for animated.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverIconSize'
  },
  {
    ruleId: 'server-icon-animated',
    assetType: 'server-icon',
    constraint: 'file-types',
    operator: 'none',
    value: null,
    units: null,
    formats: ['gif'],
    gate: 'boost-l1',
    sourceUrl: null,
    quotedSourceNote: 'Boost L1 for animated.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.serverIconAnimated'
  },
  // Avatar
  {
    ruleId: 'avatar-size',
    assetType: 'avatar',
    constraint: 'dimensions',
    operator: 'eq',
    value: '512x512',
    units: 'px',
    formats: ['jpg', 'png'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: '512x512 preset, 8MB max, JPG/PNG/GIF, Nitro for animated.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.avatarSize'
  },
  {
    ruleId: 'avatar-max-file-size',
    assetType: 'avatar',
    constraint: 'max-size',
    operator: 'lte',
    value: 8,
    units: 'MB',
    formats: ['jpg', 'png', 'gif'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: '8MB max',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.avatarMaxFileSize'
  },
  {
    ruleId: 'avatar-animated',
    assetType: 'avatar',
    constraint: 'file-types',
    operator: 'none',
    value: null,
    units: null,
    formats: ['gif'],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: 'Nitro for animated.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.avatarAnimated'
  },
  // Role icon
  {
    ruleId: 'role-icon-size',
    assetType: 'role-icon',
    constraint: 'dimensions',
    operator: 'eq',
    value: '64x64',
    units: 'px',
    formats: ['jpg', 'png'],
    gate: 'boost-l2',
    sourceUrl: null,
    quotedSourceNote: 'Exactly 64x64, max 256 KB, Boost L2 + Manage Roles.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.roleIconSize'
  },
  {
    ruleId: 'role-icon-max-file-size',
    assetType: 'role-icon',
    constraint: 'max-size',
    operator: 'lte',
    value: 256,
    units: 'KB',
    formats: ['jpg', 'png'],
    gate: 'boost-l2',
    sourceUrl: null,
    quotedSourceNote: 'max 256 KB',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.roleIconMaxFileSize'
  },
  // Custom emoji
  {
    ruleId: 'custom-emoji-max-dimensions',
    assetType: 'custom-emoji',
    constraint: 'dimensions',
    operator: 'lte',
    value: '128x128',
    units: 'px',
    formats: ['jpeg', 'png', 'gif', 'webp'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'Up to 128x128, 32x32 preview, max 256 KiB, JPEG/PNG/GIF/WEBP, GIF for animated.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customEmojiMaxDimensions'
  },
  {
    ruleId: 'custom-emoji-max-file-size',
    assetType: 'custom-emoji',
    constraint: 'max-size',
    operator: 'lte',
    value: 256,
    units: 'KB',
    formats: ['jpeg', 'png', 'gif', 'webp'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'max 256 KiB',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customEmojiMaxFileSize'
  },
  // Custom sticker
  {
    ruleId: 'custom-sticker-size',
    assetType: 'custom-sticker',
    constraint: 'dimensions',
    operator: 'eq',
    value: '320x320',
    units: 'px',
    formats: ['png', 'apng'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'Exactly 320x320, max 512 KiB, animated max 5s & 60 FPS, static PNG, animated APNG.',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customStickerSize'
  },
  {
    ruleId: 'custom-sticker-max-file-size',
    assetType: 'custom-sticker',
    constraint: 'max-size',
    operator: 'lte',
    value: 512,
    units: 'KB',
    formats: ['png', 'apng'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'max 512 KiB',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customStickerMaxFileSize'
  },
  {
    ruleId: 'custom-sticker-max-duration',
    assetType: 'custom-sticker',
    constraint: 'duration',
    operator: 'lte',
    value: 5,
    units: 's',
    formats: ['apng'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: 'animated max 5s',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customStickerMaxDuration'
  },
  {
    ruleId: 'custom-sticker-max-fps',
    assetType: 'custom-sticker',
    constraint: 'fps',
    operator: 'lte',
    value: 60,
    units: 'fps',
    formats: ['apng'],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: '60 FPS',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.customStickerMaxFps'
  },
  // General chat attachment
  {
    ruleId: 'chat-attachment-base',
    assetType: 'chat-attachment',
    constraint: 'max-size',
    operator: 'lte',
    value: 10,
    units: 'MB',
    formats: [],
    gate: 'none',
    sourceUrl: null,
    quotedSourceNote: '10MB base',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.chatAttachmentBase'
  },
  {
    ruleId: 'chat-attachment-nitro-basic',
    assetType: 'chat-attachment',
    constraint: 'max-size',
    operator: 'lte',
    value: 50,
    units: 'MB',
    formats: [],
    gate: 'nitro-basic',
    sourceUrl: null,
    quotedSourceNote: '50MB Nitro Basic',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.chatAttachmentNitroBasic'
  },
  {
    ruleId: 'chat-attachment-nitro',
    assetType: 'chat-attachment',
    constraint: 'max-size',
    operator: 'lte',
    value: 500,
    units: 'MB',
    formats: [],
    gate: 'nitro',
    sourceUrl: null,
    quotedSourceNote: '500MB Nitro',
    verifiedAt: '2025-01-01T00:00:00Z',
    confidence: 'high',
    reviewDueAt: '2027-01-01T00:00:00Z',
    copyKey: 'rules.chatAttachmentNitro'
  }
];
