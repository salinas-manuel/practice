#!/usr/bin/perl
use strict;
use warnings;
use DBI;
 
my $dbfile = 'data.db'; 
my $dbh = DBI->connect( "dbi:SQLite:$dbfile");
my $sth = $dbh->prepare('SELECT * FROM data');
$sth->execute;

foreach( my @result = $sth->fetchrow_array) {
    print "$_ \n";
}

while ( my @row = $sth->fetchrow_array ) {
  print "@row\n";
}
