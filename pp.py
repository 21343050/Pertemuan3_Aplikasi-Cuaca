import sys
import operator
from itertools import chain, combinations
from collections import defaultdict
from optparse import OptionParser
from openpyxl import load_workbook
from operator import mul
import pandas as pd
def subsets(arr):
""" Returns non empty subsets of arr"""
return chain(*[combinations(arr, i + 1) for i, a in enumerate(arr)])
def returnItemsWithMinSupport(itemSet, transactionList, minSupport, freqSet):
"""calculates the support for items in the itemSet and returns a subset
of the itemSet each of whose elements satisfies the minimum support"""
_itemSet = set()
localSet = defaultdict(int)
for item in itemSet:
for transaction in transactionList:
if item.issubset(transaction):
freqSet[item] += 1
localSet[item] += 1
for item, count in localSet.items():
support = float(count)/len(transactionList)
if support >= minSupport:
_itemSet.add(item)
return _itemSet
def joinSet(itemSet, length):
"""Join a set with itself and returns the n-element itemsets"""
return set([i.union(j) for i in itemSet for j in itemSet if len(i.union(j)) == length])