import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Slide system
// ---------------------------------------------------------------------------

export interface SlideDefinition {
    id: string;
    content: ReactNode;
}

// ---------------------------------------------------------------------------
// UI component props
// ---------------------------------------------------------------------------

export interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    icon?: LucideIcon;
    title?: string;
}

export interface CodeBlockProps {
    code: string;
    color?: 'emerald' | 'cyan' | 'amber' | 'rose';
    title: string;
}

export interface SlideContainerProps {
    children: ReactNode;
}

// ---------------------------------------------------------------------------
// Layout component props
// ---------------------------------------------------------------------------

export interface ProgressBarProps {
    current: number;
    total: number;
}

export interface SideNavProps {
    count: number;
    current: number;
    onSelect: (index: number) => void;
}

export interface NavControlsProps {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

// ---------------------------------------------------------------------------
// Data shapes
// ---------------------------------------------------------------------------

export interface TrainingEpoch {
    epoch: number;
    acc: number;
    loss: number;
    val_acc: number;
    val_loss: number;
}

export interface AugmentationPoint {
    name: string;
    val: number;
}

export interface ClassPoint {
    fill: string;
    name: string;
    value: number;
}

export interface CodeSnippets {
    optimization: string;
    preprocessing: string;
    threading: string;
    yunet: string;
}

export interface StatItem {
    c: string;
    l: string;
    v: string;
}

export interface MetricItem {
    c: string;
    l: string;
    v: string;
}

export interface StepItem {
    d: string;
    t: string;
}
