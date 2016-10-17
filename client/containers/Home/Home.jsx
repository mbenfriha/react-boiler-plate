import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import functional from 'react-functional';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pick, path, pipe } from 'ramda';

import * as AppActions from '../../actions';
import TopHeader from '../../components/TopHeader/TopHeader';
import Grid from '../../components/Grid';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionSummary from '../TransactionSummary/TransactionSummary';

