import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import classes from '../../assets/styleSheets/booking.module.scss'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 9,
        left: 'calc(-50% + 9px)',
        right: 'calc(50% + 9px)'
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#fff',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#fff',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:'rgba(234, 232, 217, 0.46)',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: '#bf86aa',
    zIndex: 1,
    color: '#fff',
    width: 20,
    height: 20,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: '#fff',
    }),
    ...(ownerState.completed && {
        backgroundColor: '#fff',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Details', 'Date & Time', 'Book'];

export default function StepperComponent({step}) {
    return (
        <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel className={classes.stepperLabel} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
