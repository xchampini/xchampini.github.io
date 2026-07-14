import { Component } from '@angular/core';
import { Card } from '../card/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-league-project',
  imports: [Card, NgOptimizedImage],
  templateUrl: './league-project.html',
  styleUrl: './league-project.scss',
})
export class LeagueProject {}
